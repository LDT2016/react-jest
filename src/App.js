import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import "./App.css";
import Man from "./components/man";
import Woman from "./components/woman";

function App() {
  return (
    <div className="App">
      <Man title="Adam" friend="Grace" />
      <Woman title="Grace" friend="Adam" />
      <demo1 />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    destory: state.man.destory
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

