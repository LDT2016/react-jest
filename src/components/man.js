import React from "react";
import { connect } from "react-redux";
import {
  getEmotionForManAction,
  getFriendEmotionForManAction,
  fetchDataAsync,
  getHideMyselfForManAction,
  getDestoryMyselfForManAction
} from "../actions/personAction";

function Man(props) {
  console.log(props);
  const [shaveCount, setShaveCount] = React.useState(0);

  return (
    <div className={props.hide ? "hidden" : "component man"}>
      <h3>{props.title}</h3>
      <div>
        <p>I have shaved {shaveCount} times</p>
        <button onClick={() => setShaveCount(shaveCount + 1)}>Shave</button>
      </div>
      <div>
        <p>My emotion is '{props.emotion}'</p>
        <button onClick={() => props.onChangeEmotion(0)}>Make me happy</button>
        <button onClick={() => props.onChangeEmotion(1)}>Make me angry</button>
        <button onClick={() => props.onChangeEmotion(2)}>Make me sad</button>
      </div>
      <div>
        <p>
          {props.friend}'s emotion is '{props.friendEmotion}'
        </p>
        <button onClick={() => props.onChangeFriendEmotion(0)}>
          Make {props.friend} happy
        </button>
        <button onClick={() => props.onChangeFriendEmotion(1)}>
          Make {props.friend} angry
        </button>
        <button onClick={() => props.onChangeFriendEmotion(2)}>
          Make {props.friend} sad
        </button>
      </div>
      <div>
        <p>{props.res}</p>
        <button onClick={() => props.dispatch(fetchDataAsync())}>
          Make a call
        </button>
      </div>
      <div>
        <button onClick={() => props.onHideMyself()}>Hide Myself</button>
        <button onClick={() => props.onDestoryMyself()}>Destory Myself</button>
      </div>
      <div>
        <div className={"desc"}>
          <ul>
            <li>本控件是Man组件，控件Grace是Woman组件</li>
            <li>
              Shave按钮，使用了Hook中的useState钩子，此按钮只用于改变控件内部状态，不影响其他外部控件
            </li>
            <li>“Make me happy”等按钮用于改变控件自身的状态（redux store）</li>
            <li>
              “Make Grace happy”等按钮用于改变其他控件的状态（redux store）
            </li>
            <li>“Make a call”按钮用于演示异步改变控件状态（redux store）</li>
            <li>
              “Hide
              Myself”按钮用于隐藏控件本身（不销毁，状态保留），隐藏后，可通过Grace控件“Show
              My Friend”按钮恢复显示
            </li>
            <li>
              “Destory
              Myself”按钮用于销毁控件本身（状态会丢失），销毁后，可通过Grace控件“Save
              My Friend”按钮恢复显示
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    emotion: state.man.emotion,
    res: state.man.res,
    friendEmotion: state.woman.emotion,
    hide: state.man.hide
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeEmotion: index => dispatch(getEmotionForManAction(index)),
  onChangeFriendEmotion: index => dispatch(getFriendEmotionForManAction(index)),
  onHideMyself: () => dispatch(getHideMyselfForManAction()),
  onDestoryMyself: () => dispatch(getDestoryMyselfForManAction()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Man);
