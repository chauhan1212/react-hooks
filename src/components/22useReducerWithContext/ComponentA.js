import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentA {countContext.countState}
            <button onClick={() => countContext.dispatch('increment')} >Increment</button>
            <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA