import React, { useEffect, useState } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('use Effect - updating document title')
        document.title = `Click ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => {
                setName(e.target.value)
            }} />
            <button onClick={() => setCount(count + 1)}>Click {count} times </button>
        </div>
    )
}

export default HookCounterFive