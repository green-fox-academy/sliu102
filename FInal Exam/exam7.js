function retrieveIndexes(str, letter) {
  let indexArray = [];

  if (str.length === 0 || letter.length === 0) return null;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      indexArray.push(i);
    }
  }
  return indexArray;
}