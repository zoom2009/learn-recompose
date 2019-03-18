import React, { Component } from 'react'
import {withState} from 'recompose'

const enhance = withState('counter', 'setCounter', 0)
const Counter = enhance(props => (
    <div style={{backgroundColor: '#666'}}>
        Count: {props.counter}
        <button onClick={()=>props.setCounter(props.counter + 1)}>Increase</button>
        <button onClick={()=>props.setCounter(props.counter - 1)}>Decrease</button>
    </div>
))

export default Counter