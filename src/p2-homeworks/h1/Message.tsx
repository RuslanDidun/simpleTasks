import React from 'react'
import s from './Message.module.css'

export type messageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: messageType) {
    return (
        <div className={s.message}>
                <img className={s.avatar} src={props.avatar} alt={""}/>
            <div className={s.angle}/>
                <div className={s.content}>
                    <span className={s.name}>{props.name}</span>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
    )
}

export default Message;
