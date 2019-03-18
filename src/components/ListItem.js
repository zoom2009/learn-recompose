import React from 'react'
import withAlert from './WithAlert'

const ListItem = props => (
    <div style={{backgroundColor: '#ccc'}}>
        <h4 onClick={()=>props.alert(props.title)}>{props.title}</h4>
        <p>{props.body}</p>
    </div>
)

export default withAlert(ListItem)