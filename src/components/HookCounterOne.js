import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        document.title = `Click ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count+1)}>Click {count} times </button>
    </div>
  )
}

export default HookCounterOne