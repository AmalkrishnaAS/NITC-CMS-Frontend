import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

export const getAvatar = (seed) => {
  return createAvatar(style, {
    seed,
    dataUri: true,
  });
}

