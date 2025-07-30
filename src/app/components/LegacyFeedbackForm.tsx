"use client";

import { useState } from "react";

export default function LegacyFeedbackForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200)); // Simülasyon
    setFeedbacks((prev) => [message, ...prev]);
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="w-full border border-gray-300 p-4 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 resize-none min-h-[120px] transition"
            required
          />
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            {message.length}/500
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 rounded-xl font-semibold transition text-white shadow-sm ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>

      {feedbacks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Yeni Geri Bildirimler</h3>
          <ul className="space-y-3">
            {feedbacks.map((msg, i) => (
              <li
                key={i}
                className="border p-4 rounded-xl bg-gray-50 shadow-sm text-gray-800 hover:bg-gray-100 transition"
              >
                {msg}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
