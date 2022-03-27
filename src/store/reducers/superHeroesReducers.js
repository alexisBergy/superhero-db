const initialState = {
    isLoading : false,
    isError : false,
    error : "",
    superheroes : [],
    searches : [],
}

export const superHeroesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_START":
            return {
                ...state,
                isLoading : true,
                searches : [...state.searches, action.payload] // add current search to list
            }
        case "SEARCH_SUCC":
            return {
                ...state,
                isLoading : false,
                isError : false,
                superheroes : action.payload,
            }
        case "SEARCH_ERR":
            return {
                ...state,
                isLoading : false,
                isError : true,
                error : action.payload,
            }
    
        default:
            return state;
    }
}