import React, {useState,useEffect} from 'react'

function HookCounter7() {

    const [x, setX] = useState()
    const [y, setY] = useState()

    const logMousePosition = e => {
        console.log('mouse event ')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('effect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('component unMounting code ')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookCounter7
