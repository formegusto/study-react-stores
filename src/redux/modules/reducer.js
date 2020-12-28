import { CounterStore } from "./store";
import { DECREMENT, INCREMENT, INCREMENTWO } from "./types";

export default function Counter(state=CounterStore, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        case INCREMENTWO:
            return {
                ...state,
                number: state.number + action.payload,
            };
        default:
            return state;
    }
}