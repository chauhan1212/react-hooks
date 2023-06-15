import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={ () =>{ setCount(count+1)}}> Hook Click {count} times </button>
        </div>
    )
}

export default HookCounter