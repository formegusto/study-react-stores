import { ApiStore } from './store';
import { GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from './type';

export default function ApiReducer(state=ApiStore, action) {
    switch(action.type){
        case GET_POST:
            return {
                ...state,
                loading: {
                    GET_POST: true
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: {
                    GET_POST: false,
                }
            }
        case GET_POST_FAILURE:
            return {
                ...state,
                post: action.payload,
                loading: {
                    GET_POST: false,
                }
            }
        default :
            return state;
    }
}