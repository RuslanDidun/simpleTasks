import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'
import styles from '../../commonComponents/commonComponents.module.css'
import Button from "../../commonComponents/Button";


type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <div className={style.buttonPosition}>

                <Button onClick={setAll} text={'All'}/>

                <button onClick={setAll} className={styles.button}>All</button>
                <button onClick={setHigh} className={styles.button}>High</button>
                <button onClick={setMiddle} className={styles.button}>Middle</button>
                <button onClick={setLow} className={styles.button}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
