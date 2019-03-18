import React from 'react'
import {withState} from 'recompose'

const CardOpen = ({open, setOpen, title, content}) => (
    <div style={{backgroundColor: '#666'}}>
        {open==true &&
            <div>
                <h2>{title}</h2>   
                <p>{content}</p>
            </div>
        }
        <button onClick={() => setOpen(!open)}>Click to open</button>
    </div>
)

export default withState('open', 'setOpen', false)(CardOpen)