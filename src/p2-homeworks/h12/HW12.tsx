import React from "react";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = 'some'; // useSelector

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
