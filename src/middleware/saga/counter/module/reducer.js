import { CounterStore } from "./store";
import { DECREASE, INCREASE } from "./type";

export default function CounterReducer(state=CounterStore, action) {
    switch(action.type) {
        case INCREASE :
            return state + 1;
        case DECREASE :
            return state - 1;
        default :
            return state;
    }
}