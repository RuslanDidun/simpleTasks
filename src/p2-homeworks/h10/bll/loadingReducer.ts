const initState = {

};

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "": {
            return state;
        }
        default: return state;
    }
};

export const loadingAC = (): any => {}; // fix any