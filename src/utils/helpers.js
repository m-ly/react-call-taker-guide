export function findMatchingCallTypes(data, inputString) {
  return data.filter((callType) => {
    return callType.keywords.some(({ keyword }) => {
      return inputString.toLowerCase().includes(keyword.toLowerCase());
    });
  });
}
