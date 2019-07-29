import { ActionType } from "../actions/personAction";
import { Emotions } from "../contant";

const initState = {
  emotion: Emotions[0],
  showFriend: false,
  saveFriend: false
};
const woman = (state = initState, action) => {
  console.log('reducer woman');
  /*** 重要！！！ 千万不要直接改变state的值 ***/
  let womanState = Object.assign({}, state);
  switch (action.type) {
    case ActionType.EMOTION_CHANGED_FOR_WOMAN:
      womanState.emotion = Emotions[action.index];
      return womanState;
    case ActionType.FRIEND_EMOTION_CHANGED_FOR_MAN:
      womanState.emotion = Emotions[action.index];
      return womanState;
    case ActionType.HIDE_MYSELF:
      womanState.showFriend = true;
      womanState.saveFriend = false;
      return womanState;
    case ActionType.DESTORY_MYSELF:
      womanState.showFriend = false;
      womanState.saveFriend = true;
      return womanState;
    case ActionType.SHOW_MY_FRIEND:
    case ActionType.SAVE_MY_FRIEND:
      womanState.showFriend = false;
      womanState.saveFriend = false;
      return womanState;
    default:
      return state;
  }
};

export default woman;
