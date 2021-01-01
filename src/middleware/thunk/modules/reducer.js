import { thunkStore } from "./store";
import { GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS, GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./types";

export default function thunkReducer(state=thunkStore, action){
    switch(action.type) {
        case GET_POST: 
            return {
                ...state,
                loading: {
                    ...state.loading,
                    GET_POST: true,
                }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: {
                    ...state.loading,
                    GET_POST: false,
                }
            };
        case GET_POST_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    GET_POST: false,
                }
            };
        case GET_USERS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    GET_USERS: true,
                }
            };
        case GET_USERS_SUCCESS:
            return {
                ...state, 
                loading: {
                    ...state.loading,
                    GET_USERS: false,
                }
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    GET_USERS: false,
                }
            };
        default:
            return state;
    }
}