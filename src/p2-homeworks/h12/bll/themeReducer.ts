export type ThemeType = 'dark' | 'red' | 'green'

export type ThemeReducerType = {
    theme: ThemeType
}

export const initState: ThemeReducerType = {
    theme: 'dark'
}

export const themeReducer = (state = initState, action: ActionType): ThemeReducerType => {
    switch (action.type) {
        case 'SWITCH-THEME' : {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state
    }
}

export const changeThemeAC = (theme: ThemeType) => ({type: 'SWITCH-THEME', theme} as const)

type InitialStateType = typeof initState
type ActionType = ReturnType<typeof changeThemeAC>
