import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increase':
            return state + 1
        case 'decrease':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
        }
}

function Counter1() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
        <div>count - {count}</div>
            <button onClick={() => dispatch('increase')}>Increase</button>
            <button onClick={() => dispatch('decrease')}>Decrease</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Counter1
