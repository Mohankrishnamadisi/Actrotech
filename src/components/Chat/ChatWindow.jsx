import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import chatData from "./chatData";

const options = [
  { key: "web_development", label: "Web Development" },
  { key: "ui_development", label: "UI Development" },
  { key: "api_development", label: "API Development" },
  { key: "projects", label: "Projects" },
  { key: "careers", label: "Careers" },
];

export default function ChatWindow({ onClose }) {
  const [history, setHistory] = useState([
    { from: "bot", text: "Hi! Choose an option or type your question." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping]);

  const addMessage = (from, text) => {
    setHistory(prev => [...prev, { from, text }]);
  };

  const botReply = messageKey => {
    const reply = chatData[messageKey] || "Please select an option or contact support";
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage("bot", reply);
    }, 700);
  };

  const handleOption = option => {
    addMessage("user", option.label);
    botReply(option.key);
  };

  const callSupabaseAI = async message => {
    setIsTyping(true);
    try {
      const res = await fetch("https://rvqeobhdexknhffnqbmy.supabase.co/functions/v1/bright-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (!res.ok || !data?.data?.reply) {
        throw new Error("No response from Supabase Edge Function");
      }

      addMessage("bot", data.data.reply);
    } catch (error) {
      console.error("Supabase Edge Function request failed:", error);
      addMessage("bot", "Unable to fetch response");
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    addMessage("user", trimmed);

    const lower = trimmed.toLowerCase();
    const matched = options.find(
      o => lower.includes(o.label.toLowerCase()) || lower.includes(o.key.replace("_", " "))
    );

    if (matched) {
      botReply(matched.key);
    } else {
      await callSupabaseAI(trimmed);
    }

    setInput("");
  };

  return (
    <div className="w-[340px] h-[460px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="text-sm font-semibold">AI Assist</h3>
        <button onClick={onClose} className="text-white text-lg leading-none">
          ×
        </button>
      </div>

      <div className="p-3 flex-1 overflow-auto" style={{ background: "#f7fafc" }}>
        <div className="flex flex-wrap gap-2 mb-3">
          {options.map(option => (
            <button
              key={option.key}
              className="text-xs px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={() => handleOption(option)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {history.map((item, idx) => (
          <ChatMessage key={`${item.from}-${idx}`} message={item.text} isBot={item.from === "bot"} />
        ))}

        {isTyping && (
          <div className="flex justify-start mb-2">
            <div className="bg-white px-3 py-2 rounded-xl shadow-sm text-sm text-gray-600">Typing...</div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </form>
    </div>
  );
}
