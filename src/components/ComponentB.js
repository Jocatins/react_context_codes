import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import {UserContext, ChanelContext} from '../App'

function ComponentB() {

    const user = useContext(UserContext)
    const chanel = useContext(ChanelContext)
    return (
        <div>
            {user} - {chanel}
        </div>
    )
}

export default ComponentB
