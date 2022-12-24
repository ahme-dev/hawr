import { unstable_renderSubtreeIntoContainer } from "react-dom";

let translation = [
  { phrase: "Sunny", to: "هەتاو" },
  { phrase: "Slemani", to: "سلێمانی" },
  { phrase: "As Sulaymaniah", to: "سلێمانی" },
  { phrase: "Sulaimania", to: "سلێمانی" },
  { phrase: "Sulaimaniya", to: "سلێمانی" },
  { phrase: "Irbil", to: "هەولێر" },
  { phrase: "Hawler", to: "هەولێر" },
  { phrase: "Erbil", to: "هەولێر" },
];

function transl(phrase) {
  const found = translation.find((el) => el.phrase === phrase);
  if (found == "" || found == undefined) {
    return phrase;
  } else return found.to;
}

export default transl;
