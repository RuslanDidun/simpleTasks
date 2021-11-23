import React from "react"
import s from "./HW12.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'green']

function HW12() {
    const theme = useSelector<AppStoreType, any>((state) => state.themeReducer.theme)
    const dispatch = useDispatch()

    const changeThemeCallback = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>

            <span className={s[theme + '-text']}>
                #12
            </span>
            <SuperSelect
                onChangeOption={changeThemeCallback}
                options={themes}
            />

            <SuperButton onClick={() => changeThemeCallback('red')}>
                Red
            </SuperButton>
            <SuperButton onClick={() => changeThemeCallback('dark')}>
                Dark
            </SuperButton>
            <SuperButton onClick={() => changeThemeCallback('green')}>
                Green
            </SuperButton>

            {/* {theme === 'dark' ? (
                <button onClick={() => changeThemeCallback('red')}>
                    Switch to red
                </button>
            ) : (
                <button onClick={() => changeThemeCallback('dark')}>
                    Switch to dark
                </button>
            )}*/
            }
            <hr/>
        </div>
    )
}

export default HW12
