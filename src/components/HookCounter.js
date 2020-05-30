import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 2)}>Plus one{count}</button>
        </div>
    )
}

export default HookCounter
