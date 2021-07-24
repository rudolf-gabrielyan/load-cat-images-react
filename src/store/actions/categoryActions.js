import api from "../../repasitory/RepositoryFactory";

export function getCategories() {
    return dispatch => {
        return api.image("getCategories")
            .then(({data}) => {
                dispatch({
                    type: 'GET_CATEGORY_SUCCESS',
                    payload: data,
                })
            })
    };
}