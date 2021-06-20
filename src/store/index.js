// import {
// 	createStore,
// 	applyMiddleware
// } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// 	reducer,
// 	applyMiddleware(thunk)
// );
const store = createStore(
	reducer, /* preloadedState, */
	composeEnhancers(
		applyMiddleware(thunk, logger)
	));



export default store;