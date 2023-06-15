import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log(state)
            return { ...state, firstCounter: (state.firstCounter + action.value) }
        case 'decrement':
            console.log(state)
            return { ...state, firstCounter: (state.firstCounter - action.value) }
        case 'increment2':
            console.log(state)
            return { ...state, secondCounter: (state.secondCounter + action.value) }
        case 'decrement2':
            console.log(state)
            return { ...state, secondCounter: (state.secondCounter - action.value) }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter  - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 2 })} >Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })} >Increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5</button>
            </div>
        </div>
    )
}

export default CounterTwo