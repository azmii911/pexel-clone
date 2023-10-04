import { atom, selectorFamily, selector } from "recoil";
import { createClient } from "pexels";
const client = createClient(process.env.REACT_APP_PEXEL_KEY);


export const photoState = atom({
  key: "photoState",
  default: [],
});

