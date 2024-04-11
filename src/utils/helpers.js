export function findMatchingCallTypes(data, inputString) {
  return data.filter((callType) =>
    callType.keywords.some((keyword) => {
      return keyword.keyword.toLowerCase().includes(inputString.toLowerCase());
    })
  );
}
