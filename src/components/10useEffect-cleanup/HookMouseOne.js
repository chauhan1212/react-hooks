import React, { useEffect, useState } from 'react'

function HookMouseOne() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = (e) => {
        console.log('mouse event.')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called.')
        // Below line should be uncommented, commented as this was having huge impact on browser.
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X : {x}
            Y : {y}
        </div>
    )
}

export default HookMouseOne