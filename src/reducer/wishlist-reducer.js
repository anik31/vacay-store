export function wishlistReducer(state, action){
    switch(action.type){
        case "SET_WISHLIST":
            return state = action.payload;
        default:
            return state;
    }
}