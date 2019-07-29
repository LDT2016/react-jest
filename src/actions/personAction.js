import fetch from "cross-fetch";

// 定义所有的Action类型
export const ActionType = {
  EMOTION_CHANGED_FOR_MAN: "EMOTION_CHANGED_FOR_MAN",
  FRIEND_EMOTION_CHANGED_FOR_MAN: "FRIEND_EMOTION_CHANGED_FOR_MAN",
  EMOTION_CHANGED_FOR_WOMAN: "EMOTION_CHANGED_FOR_WOMAN",
  FRIEND_EMOTION_CHANGED_FOR_WOMAN: "FRIEND_EMOTION_CHANGED_FOR_WOMAN",
  FETCH_DATA: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR: "FETCH_DATA_ERROR",
  FETCH_DATA_BEGIN: "FETCH_DATA_BEGIN",
  HIDE_MYSELF: "HIDE_MYSELF",
  DESTORY_MYSELF: "DESTORY_MYSELF",
  SHOW_MY_FRIEND: "SHOW_MY_FRIEND",
  SAVE_MY_FRIEND: "SAVE_MY_FRIEND"
};

// 返回Action对象
export const getEmotionForManAction = index => ({
  type: ActionType.EMOTION_CHANGED_FOR_MAN,
  index
});

export const getFriendEmotionForManAction = index => ({
  type: ActionType.FRIEND_EMOTION_CHANGED_FOR_MAN,
  index
});
export const getEmotionForWomanAction = index => ({
  type: ActionType.EMOTION_CHANGED_FOR_WOMAN,
  index
});

export const getFriendEmotionForWomanAction = index => ({
  type: ActionType.FRIEND_EMOTION_CHANGED_FOR_WOMAN,
  index
});

// #Async action begin
// 请求开始时使用此Action
export const fetchDataBegin = () => ({
  type: ActionType.FETCH_DATA_BEGIN
});
// 正确返回结果时使用此Action
export const fetchDataSuccess = res => ({
  type: ActionType.FETCH_DATA_SUCCESS,
  res
});
// 请求错误或返回错误结果时使用此Action
export const fetchDataError = err => ({
  type: ActionType.FETCH_DATA_ERROR,
  err
});
// 请求入口，返回promise对象
export const fetchDataAsync = () => {
  return dispatch => {
    dispatch(fetchDataBegin());    

    return fetch("https://amsterdam.free.beeceptor.com/api/get")
      .then(res => res.json())
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(err => dispatch(fetchDataError(err)));
  };
};
// #Async action end

export const getHideMyselfForManAction = () => ({
  type: ActionType.HIDE_MYSELF
});

export const getDestoryMyselfForManAction = () => ({
  type: ActionType.DESTORY_MYSELF
});

export const getShowMyFriendForWomanAction = () => ({
  type: ActionType.SHOW_MY_FRIEND
});

export const getSaveMyFriendForWomanAction = () => ({
  type: ActionType.SAVE_MY_FRIEND
});
