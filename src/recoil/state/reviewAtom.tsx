import { atom } from "recoil";
import { ReviewProps } from "utils/types";

export const reviewListState = atom<ReviewProps[]>({
  key: "reviewListState",
  default: [],
});
