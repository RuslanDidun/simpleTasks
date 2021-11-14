import React from 'react'
import {NavLink} from "react-router-dom"
import styles from './pages/PageStyles.module.css'

function Header() {
    return (
        <div>
            <div className={styles.innerDiv}>
                <NavLink exact to='/pre-junior/' className={styles.preJunior}>PreJunior</NavLink>
                <NavLink exact to='/Junior' className={styles.junior}>Junior</NavLink>
                <NavLink exact to='/Upper-Junior' className={styles.upperJunior}>UpperJunior</NavLink>
                <div className={styles.visibleBlock}/>
            </div>
        </div>
    )
}

export default Header
