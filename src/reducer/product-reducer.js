export function productReducer(state, action){
    switch(action.type){
        case "SET_PRODUCTS":
            return {...state, products: action.payload};
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "SET_SEARCH_TERM":
            return {...state, filters: {
                ...state.filters, 
                searchTerm: action.payload
            }};
        case "SORT_PRODUCTS":
            return {...state, filters: {
                ...state.filters,
                sortBy: action.payload
            }};
        case "FILTER_BY_OUT_OF_STOCK":
            return {...state, filters: {
                ...state.filters,
                includeOutOfStock: action.payload
            }};
        case "FILTER_BY_PRICE_RANGE":
            return {...state, filters: {
                ...state.filters,
                priceRange: action.payload
            }};
        case "FILTER_BY_RATING":
            return {...state, filters: {
                ...state.filters,
                rating: action.payload
            }};
        case "FILTER_BY_CATEGORY":
            return state.filters.category.includes(action.payload)
            ?{...state, filters: {
                ...state.filters,
                category:[...state.filters.category].filter(item=>item!=action.payload)
            }}
            :{...state, filters: {
                ...state.filters,
                category:[...state.filters.category].concat(action.payload)
            }};
        case "CLEAR_ALL_FILTERS":
            return {...state, filters: {
                ...state.filters,
                sortBy: "FEATURED",
                category: [],
                rating: null,
                priceRange: 25000,
                includeOutOfStock: false
            }};
        default:
            return state;
    }
}