
const initState = {
    isLoading: true
}

export const loadingReducer = (state = initState, action:ActionType): InitialStateType => {
    switch (action.type) {
        case "IS-LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean):ACLoadingType => ({type:"IS-LOADING",isLoading} as const)


type ACLoadingType = {
    type: "IS-LOADING"
    isLoading: boolean
}
type InitialStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>