import React, {useState} from "react"
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import {restoreState, saveState} from "./localStorage/localStorage"
import styles from './common/c4-SuperEditableSpan/styles.module.css'

function HW6() {
    const [value, setValue] = useState<string>("")

    const save = () => {
        saveState<string>("editable-span-value", value)
    }
    const restore = () => {
         setValue(restoreState<string>("editable-span-value",''))
    }

    return (
        <div>
            <hr/>
            #6
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <SuperButton onClick={save} className={styles.button}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>


        </div>
    )
}

export default HW6
