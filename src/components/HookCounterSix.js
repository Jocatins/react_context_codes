import React,{useState, useEffect} from 'react'

function HookCounterSix() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse movements')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    },[])
    return (
        <div>
            Hooks x - {x} y - {y}
        </div>
    )
}

export default HookCounterSix
