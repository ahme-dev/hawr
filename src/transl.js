let translation = [{ phrase: "Sunny", to: "هەتاو" }, {}];

function transl(phrase) {
  const found = translation.find((o) => o.phrase === phrase);
  return found.to;
}

export default transl;
