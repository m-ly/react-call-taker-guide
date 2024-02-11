export function buildQuestionList(data, callType) {
  const callQuestions = data[callType];
  const generalQuestions = [
    "What is the address?",
    "What are you reporting?",
    "When did this happen",
  ];

  const endingQuestions = ["Caller Info", "Do you want contact?"];

  return [...generalQuestions, ...callQuestions, ...endingQuestions];
}
