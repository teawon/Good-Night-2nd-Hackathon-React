import { atom } from "recoil";

export const isAdminAtom = atom({
  key: "isAdmin",
  default: JSON.parse(localStorage.getItem("isAdmin") || "false"),
});
