import { ActionType } from "../actions/personAction";
import { Emotions } from "../contant";

const initState = {
  emotion: Emotions[0],
  res: null,
  hide: false,
  destory: false
};
const man = (state = initState, action) => {
  console.log("reducer man");
  /*** 重要！！！ 千万不要直接改变state的值 ***/
  let manState = Object.assign({}, state);
  switch (action.type) {
    case ActionType.EMOTION_CHANGED_FOR_MAN:
      manState.emotion = Emotions[action.index];
      return manState;
    case ActionType.FETCH_DATA_BEGIN:
      manState.res = "Calling...";
      return manState;
    case ActionType.FETCH_DATA_SUCCESS:
      manState.res = action.res.message;
      return manState;
    case ActionType.FETCH_DATA_ERROR:
      manState.res = "Failed";
      return manState;
    case ActionType.HIDE_MYSELF:
      manState.hide = true;
      return manState;
    case ActionType.DESTORY_MYSELF:
      manState.destory = true;
      return manState;
    case ActionType.SHOW_MY_FRIEND:
      manState.hide = false;
      return manState;
    case ActionType.SAVE_MY_FRIEND:
      manState.destory = false;
      return manState;
    default:
      return manState;
  }
};

export default man;
