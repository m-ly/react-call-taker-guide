//input: an array, which contains a objects, and a string
//   the array is modeled: [ { id: num, name: str, questions: [{id: num, question: string}], keywords: [id: num, keyword: string]}]

// examples
// if the data array is [{id:1, name: 'test1', questions: {id: 1, question: 'q1?', 'keywords': [{id:1, keyword:'test1'}, {id:2, keyword: 'homeless'}]}}, {id:2, name: 'test2', questions: {id: 2, question: 'q1?', 'keywords': [{id:2, keyword:'test2'}, {id:2, keyword: 'homeless'}]}}]

// if the inputString is 'test1' the function should return the object which contains the name: 'test1'
// if the inputString is 'test2' the function should return the object which contains the name: 'test2'
// if the inputString is 'homeless' the function should return both objects
// if the inputString is 'dog' the function should return nothing

// algorithm
// iterate the passed data and for each object in the array, return any object that contains a string that is the keyword property of one of the keywords

export function findMatchingCallTypes(data, inputString) {
  return data.filter((callType) => {
    return callType.keywords.some(({ keyword }) => {
      return keyword.toLowerCase().includes(inputString.toLowerCase());
    });
  });
}
