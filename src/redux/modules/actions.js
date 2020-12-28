import { DECREMENT, INCREMENT, INCREMENTWO } from "./types";

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const incrementwo = (amount) => ({type: INCREMENTWO, payload: amount});