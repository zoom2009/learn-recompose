import React from 'react'
import { branch, renderComponent, withState, lifecycle, compose, withHandlers } from 'recompose'

const Loading = () => (
    <div>Loading...</div>
)

const ContentWithLoading = ({loading, loading2, MethodAlert, handleAlert, color, isActive, handleTextChange, handleClickSetActive, title}) => (
    <div style={{backgroundColor: '#ccc'}}>  
        <h4>{title}</h4>
        <p>current loading is : {loading ? 'true' : 'false'}</p>
        <p>current loading2 is : {loading2 ? 'true' : 'false'}</p>
        <div style={{color: isActive ? color : 'black'}}>
            Ea sunt ipsum esse cillum sunt consectetur anim culpa.<br />
            Ea sunt ipsum esse cillum sunt consectetur anim culpa.<br />
            Ea sunt ipsum esse cillum sunt consectetur anim culpa.<br />
            Ea sunt ipsum esse cillum sunt consectetur anim culpa.<br />
        </div>
        <input onChange={handleTextChange} type='text' />
        <button onClick={handleClickSetActive}>Set Color Active</button>
        <button onClick={handleAlert}>Click for Alert</button>
        <button onClick={MethodAlert}>Click for Alert2</button>
    </div>
)

const enhance = compose(
    withState('loading', 'setLoading', true), // stateName, setStateFN, initState
    withState('loading2', 'setLoading2', false),
    withState('isActive', 'setActive', false),
    withState('color', 'setColor', 'black'),
    withHandlers({
        handleClickSetActive: props => event => props.setActive(!props.isActive),
        handleTextChange: props => event => props.setColor(event.target.value),
        handleAlert: props => () => props.MethodAlert()
    }),
    lifecycle({
        componentDidMount() {
            console.log('Before props is ', this.props)
            setTimeout(() => {
                this.props.setLoading(false)
                console.log('After1 props is ', this.props)
            }, 3000)
            setTimeout(() => {
                this.props.setLoading2(true)
                console.log('After2 props is ', this.props)
            }, 5000)
        }
    }),
    branch( // check condition if true render loading else render TargetCompoent
        props => props.loading,
        renderComponent(Loading)
    )
)

export default enhance(ContentWithLoading)