import React, {useState} from "react"
import {homeWorkReducer} from "./bll/homeWorkReducer"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"

export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople)

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span>{p.name}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const chek18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <hr/>
            #8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={chek18}>check 18</SuperButton>
            </div>

        </div>
    )
}

export default HW8
