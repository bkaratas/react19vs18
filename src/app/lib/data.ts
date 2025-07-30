export let feedbacks: string[] = [];

export function getFeedbacks() {
  return feedbacks;
}

export function addFeedback(message: string) {
  feedbacks.push(message);
}
