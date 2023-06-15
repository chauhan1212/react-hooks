import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i<2000000000) i++
        return counterOne % 2 === 0
    },[counterOne])

    // if you need to cache the function then use useCallback 
    // if you need to cache the result of invoke function then use useMemo

    return (
        <div>
            <div>
                <span>{isEven ? 'Even' : 'Odd'}</span>
                <button onClick={incrementOne} >Count One {counterOne}</button>
            </div>
            <button onClick={incrementTwo} >Count Two {counterTwo}</button>
        </div>
    )
}

export default Counter