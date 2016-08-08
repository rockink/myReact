import {applyMiddleware,createStore} from "redux";
import {allReducers} from "./reducers/reducers";
import createLogger from 'redux-logger';

const logger = createLogger();
export const store = createStore(allReducers, applyMiddleware(logger));

store.subscribe(function(state){
    console.log("subs",state);
});
