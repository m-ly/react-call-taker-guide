export function findMatchingCallTypes(data, inputString) {
  const types = data.map((callType) =>
    callType.keywords.map((keyword) => {
      if (keyword.keyword.toLowerCase().includes(inputString.toLowerCase()))
        return callType.name;
    })
  );

  //should probably refactor this to a reducer for readability
  return [...new Set(types.flat().filter((ele) => ele))];
}
