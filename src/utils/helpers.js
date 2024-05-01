export function findMatchingCallTypes(data, inputString) {
  return data.filter((callType) =>
    callType.keywords.some((keyword) => {
      return inputString.toLowerCase().includes(keyword.keyword.toLowerCase());
    })
  );
}
