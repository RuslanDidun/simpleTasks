import React, { useState } from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users,user])
    }

    return (
        <div>
            <hr/>
            # 3
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

        </div>
    )
}

export default HW3
