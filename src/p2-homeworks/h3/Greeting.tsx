import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    /*const inputClass = s.error ? s.errorInput : s.input*/ // need to fix with (?:)

    return (
        <div className={s.text}>
            <input
                value={name}
                onChange={setNameCallback}
                className={s.inputClass}
                onKeyDown={onEnter}
            />
            <span>{error}</span>
            <button onClick={addUser}
                    className={s.button}>add
            </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
