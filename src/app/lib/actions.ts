'use server';

export async function submitFeedback(
  prevState: any,
  formData: FormData
) {
  const message = formData.get('message')?.toString() || '';

  if (!message || message.length < 5) {
    return { success: false, error: 'Mesaj en az 5 karakter olmalı.' };
  }

  return { success: true, error: '', lastMessage: message };
}
