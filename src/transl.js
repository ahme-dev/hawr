let translation = [
  { phrase: "Sunny", to: "هەتاو" },
  { phrase: "Slemani", to: "سلێمانی" },
];

function transl(phrase) {
  const found = translation.find((el) => el.phrase === phrase);
  return found == "" ? phrase : found.to;
}

export default transl;
