import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", false);
export const langAtom = atomWithStorage("lang", "en");
