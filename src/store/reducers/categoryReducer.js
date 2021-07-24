const initialState = {
    categories: [],
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_SUCCESS':
            return {
                ...initialState,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default imageReducer;