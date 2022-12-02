import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

export const getAvatar = (seed) => {
  return createAvatar(style, {
    seed,
    dataUri: true,
  });
}
export const getOptsbyStatus = (status) => {
  if(status=='Open') {
    return [
      {
        value:'Processing',
        label:'Processing'
      },
      {
        value:'Resolved',
        label:'Resolved'
      },
    ]
  }
  if(status=='Processing') {
    return [
      {
        value:'Resolved',
        label:'Resolved'
      },

    ]
  }
  return []
  }