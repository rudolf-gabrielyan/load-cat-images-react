import api from "../../repasitory/RepositoryFactory";

export function getImages(limit, category_id) {
    return dispatch => {
        return api.image("getImages", { limit, category_id })
            .then(({data}) => {
                dispatch({
                    type: 'GET_IMAGES_SUCCESS',
                    payload: data,
                })
            })
    };
}