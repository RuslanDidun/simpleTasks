import React, {CSSProperties, useState} from "react";
import {requestAPI} from "./RequestAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [info, setInfo] = useState<string>('')

    const responseStyle: CSSProperties = {
        textAlign: 'center',
        fontStyle: 'italic'
    }


    const makeRequest = () => {
        requestAPI.makeRequest(checked)
            .then(res => {
                setInfo(res.data.info)
            })
            .catch(err => {
                console.warn(JSON.stringify(err))
                setInfo(err.response.data.error)
            })
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div>
            <SuperButton onClick={makeRequest}> Do Request </SuperButton>
            <SuperCheckbox checked={checked} onChange={onChangeHandler}/>
            <span>Do you want to have good answer?</span>
            <h1 style={responseStyle}>{info}</h1>
        </div>
    )
}