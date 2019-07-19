import React from 'react'
import SubExample from './SubExample';

function Example(props){
    return (<div>
        <button>{props.text}</button>
        <SubExample text={props.text}  />
    </div>)
}
export default Example;