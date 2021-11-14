import {loadingReducer} from "./loadingReducer"
import {combineReducers, createStore} from "redux"
import {themeReducer} from "../../h12/bll/themeReducer"

const reducers = combineReducers({
    loading: loadingReducer, themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
