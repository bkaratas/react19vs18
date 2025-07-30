'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitFeedback } from '../lib/actions';

export default function ModernFeedbackInline() {
  const [state, formAction] = useActionState(submitFeedback, {
    success: false,
    error: '',
  });

  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="space-y-4">
      <textarea
        name="message"
        placeholder="Mesajınızı yazın..."
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        disabled={pending}
        className={`px-4 py-2 rounded ${
          pending ? 'bg-gray-400' : 'bg-blue-600 text-white'
        }`}
      >
        {pending ? 'Gönderiliyor...' : 'Gönder'}
      </button>
      {state.error && <p className="text-red-500">{state.error}</p>}
      {state.success && <p className="text-green-600">Teşekkürler!</p>}
    </form>
  );
}
