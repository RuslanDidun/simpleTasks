import React from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import {useDispatch, useSelector} from "react-redux"
import {AppStoreType} from "./bll/store"
import {loadingAC} from "./bll/loadingReducer"
import Preloader from "./Preloader"


function HW10() {
    // useSelector, useDispatch

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
    }

    setTimeout(() => {
        dispatch(loadingAC(false))
    },1000)

    return (
        <div>
            <hr/>
            #10


            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>
                        <Preloader/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10
