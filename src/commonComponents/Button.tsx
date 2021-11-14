import React from 'react'
import s from './commonComponents.module.css'
import {FilterType} from "../p2-homeworks/h2/HW2";

type ButtonType = {
    text: string
    onClick: () => void
}

const Button = (props: ButtonType) => {
    return (
        <button className={s.button}>{props.text}</button>
    )
}

export default Button