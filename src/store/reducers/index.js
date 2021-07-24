import { createStore, combineReducers, applyMiddleware } from "redux";
import imageReducer from './imageReducer';
import categoryReducer from './categoryReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { MODE } from '../../config/env';

const rootReducer = combineReducers({
    image: imageReducer,
    category: categoryReducer
})

const middlewares = [];
if(MODE === 'development'){
    middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(thunk, ...middlewares));