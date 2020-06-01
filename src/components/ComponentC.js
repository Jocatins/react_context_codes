import React from 'react'
import {UserContext, ChanelContext} from '../App'

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChanelContext.Consumer>
                        {
                            chanel => {
                                return <div>User Context Value {user}, User Channel value {chanel}</div>
                            }
                        }
                        </ChanelContext.Consumer>
                    ) 
                }
            }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
