import { atom } from "recoil";
import { ReviewResponseProps } from "utils/types";

export const reviewListState = atom<ReviewResponseProps[]>({
  key: "reviewListState",
  default: [],
});
