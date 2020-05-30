import React, {useState, useEffect} from 'react'

function HookCounter9() {
    const [count, setCount] = useState(0)
    const ticking = () => {
        setCount(prevCount => prevCount + 6)
    }
    useEffect (() => {
        const interval = setInterval(ticking, 2000)
        return () => {
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export default HookCounter9
