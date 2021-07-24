const initialState = {
    images: []
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_IMAGES_SUCCESS':
            return {
                ...initialState,
                images: action.payload
            }
        default:
            return state;
    }
}

export default imageReducer;