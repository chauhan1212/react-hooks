import React, { useState } from 'react'
import HookMouseOne from './HookMouseOne'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouseOne />}
    </div>
  )
}

export default MouseContainer