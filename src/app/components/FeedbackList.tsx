'use client';

import { useOptimistic, useState } from 'react';

type Props = {
  initialFeedbacks: string[];
};

export default function FeedbackList({ initialFeedbacks }: Props) {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const [optimisticFeedbacks, addOptimisticFeedback] = useOptimistic(
    feedbacks,
    (state, newMessage: string) => [newMessage, ...state]
  );

  const handleAdd = async (formData: FormData) => {
    const message = formData.get('message')?.toString() || '';
    if (message.length < 5) return;
    addOptimisticFeedback(message);
    setFeedbacks((prev) => [message, ...prev]);
  };

  return (
    <form action={handleAdd} className="space-y-4">
      <textarea
        name="message"
        className="w-full border p-2 rounded"
        placeholder="Mesaj girin..."
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Ekle
      </button>

      <ul className="mt-4 space-y-2">
        {optimisticFeedbacks.map((msg, i) => (
          <li key={i} className="border p-2 rounded bg-white shadow">
            {msg}
          </li>
        ))}
      </ul>
    </form>
  );
}
