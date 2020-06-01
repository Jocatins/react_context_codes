import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrease':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increase10':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrease10':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
        }
}

function Counter2() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
        <div>firstCounter - {count.firstCounter}</div>
        <div>secondCounter - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increase', value: 1})}>Increase</button>
            <button onClick={() => dispatch({type:'decrease', value: 1})}>Decrease</button>
            <button onClick={() => dispatch({type: 'increase', value: 5})}>Add 5</button>
            <button onClick={() => dispatch({type:'decrease', value: 6})}>Minus 6</button>
            <div>
            <button onClick={() => dispatch({type: 'increase10', value: 1})}>Increase Counter 2</button>
            <button onClick={() => dispatch({type:'decrease10', value: 1})}>Decrease Counter2</button>
            </div>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default Counter2
