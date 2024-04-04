export function findMatchingCallTypes(data, inputString) {
  const result = [];
  for (const callTypeKey in data) {
    const keywords = data[callTypeKey].keywords;
    for (const keyword of keywords) {
      if (inputString.toLowerCase().includes(keyword.toLowerCase())) {
        result.push(callTypeKey);
        break;
      }
    }
  }

  return result;
}
