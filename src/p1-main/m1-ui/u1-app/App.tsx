import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from '../../../p2-homeworks/h4/HW4';

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            {/*<HW5/>*/}

        </div>
    )
}

export default App
