import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postsRedux from '../reduxer/postsRedux';

const rootReducer = combineReducers({
  posts: postsRedux,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
