import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import MultiRangeSlider from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './hw11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    return (
        <div className={s.mainDiv}>
            <hr/>
            #11

            {/*should work (должно работать)*/}
            <div className={s.value1}>
                <span>{value1}
                    <SuperRange onChangeRange={setValue1}
                    />
                </span>
            </div>

            <div className={s.value2}>
                <MultiRangeSlider min={0}
                                  max={100}
                                  onChange={({
                                                 min,
                                                 max
                                             }: { min: number; max: number }) =>(`min = ${min}, max = ${max}`)}
                />
            </div>

            <hr className={s.hr}/>

        </div>
    )
}

export default HW11
