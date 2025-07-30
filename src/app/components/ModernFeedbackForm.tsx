"use client";

import { useActionState, useTransition, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitFeedback } from "../lib/actions";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function ModernFeedbackForm() {
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  const [state, formAction] = useActionState(submitFeedback, {
    success: false,
    error: "",
  });

  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const isComparePage = pathname === "/compare";

  useEffect(() => {
    if (state.success && !isPending) {
      const message = state.lastMessage;
      if (message) {
        setFeedbacks((prev) => [message, ...prev]);
      }
    }
  }, [state.success, isPending, state]);

  return (
    <div className="space-y-6">
      <form action={formAction} className="space-y-4">
        <div className="relative">
          <textarea
            name="message"
            placeholder="Mesajınızı yazın..."
            className="w-full border border-gray-300 p-4 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 resize-none min-h-[120px] transition"
            required
          />
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            {/* Burada karakter sayacı gösterilebilir, eğer state tutulursa */}
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
        >
          Gönder
        </button>
        {state.error && <p className="text-red-500">{state.error}</p>}
      </form>

      {isComparePage && feedbacks.length > 0 && (
        <div className="mt-4">
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
