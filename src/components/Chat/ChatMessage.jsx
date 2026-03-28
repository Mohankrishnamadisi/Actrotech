import React from "react";

export default function ChatMessage({ message, isBot }) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-2`}>
      <div
        className={`max-w-[80%] px-3 py-2 rounded-xl shadow-sm text-sm ${
          isBot ? "bg-white text-gray-800" : "bg-blue-500 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
