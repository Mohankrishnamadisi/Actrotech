import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-2 transition-all duration-300 ease-out">
          <ChatWindow onClose={() => setOpen(false)} />
        </div>
      )}

      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all"
        aria-label="Open chat widget"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
