import React from 'react'
import {AffairType} from "./HW2";
import styles from '../../commonComponents/Title.module.css'
import Button from "../../commonComponents/Button";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            <span className={styles.title}>* {props.affair.name} *</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
