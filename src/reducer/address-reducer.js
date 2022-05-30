export function addressReducer(state, action){
    switch(action.type){
        case "SET_ADDRESS":
            return state = action.payload;
        default:
            return state;
    }
}
