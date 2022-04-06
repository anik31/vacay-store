export function cartReducer(state, action){
    switch(action.type){
        case "SET_CART":
            return state = action.payload;
        default:
            return state;
    }
}