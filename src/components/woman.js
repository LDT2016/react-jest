import React from "react";
import { connect } from "react-redux";
import {
  getEmotionForWomanAction,
  getFriendEmotionForWomanAction,
  getShowMyFriendForWomanAction,
  getSaveMyFriendForWomanAction
} from "../actions/personAction";

function Woman(props) {
  const [makeupCount, setMakeupCount] = React.useState(0);

  return (
    <div className={"component woman"}>
      <h3>{props.title}</h3>
      <div>
        <p>I have done make-up {makeupCount} times</p>
        <button onClick={() => setMakeupCount(makeupCount + 1)}>Makeup</button>
      </div>
      <div>
        <p>My emotion is '{props.emotion}'</p>
        <button onClick={() => props.onChangeEmotion(0)}>Make me happy</button>
        <button onClick={() => props.onChangeEmotion(1)}>Make me angry</button>
        <button onClick={() => props.onChangeEmotion(2)}>Make me sad</button>
      </div>
      <div>
        {props.showFriend && (
          <button onClick={() => props.onShowMyFriend()}>Show My Friend</button>
        )}
        {props.saveFriend && (
          <button onClick={() => props.onSaveMyFriend()}>Save My Friend</button>
        )}
      </div>
      <div className={"desc"}>
        <ul>
          <li>本控件是Woman组件，控件Adam是Man组件</li>
          <li>
            Makeup按钮，使用了Hook中的useState钩子，此按钮只用于改变控件内部状态，不影响其他外部控件
          </li>
          <li>“Make me happy”等按钮用于改变控件自身的状态（redux store）</li>
          <li>“Show My Friend”按钮用于恢复Adam控件的显示</li>
          <li>“Save My Friend”按钮用于恢复Adam控件的显示</li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  //let emotion = state.man.friendEmotion || state.woman.emotion
  return {
    emotion: state.woman.emotion,
    showFriend: state.woman.showFriend,
    saveFriend: state.woman.saveFriend
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeEmotion: index => dispatch(getEmotionForWomanAction(index)),
  onChangeFriendEmotion: index =>
    dispatch(getFriendEmotionForWomanAction(index)),
  onShowMyFriend: () => dispatch(getShowMyFriendForWomanAction()),
  onSaveMyFriend: () => dispatch(getSaveMyFriendForWomanAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Woman);
