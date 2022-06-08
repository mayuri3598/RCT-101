import { COUNTER_DECREMENT, COUNTER_INCREMENT ,COUNTER_MULTIPLY , COUNTER_DIVIDE} from "./action.type";

export const Add = (x) => ({type: COUNTER_INCREMENT , value : x});
export const sub = (x) => ({type: COUNTER_DECREMENT , value : x});
export const Multiply = (x) => ({type: COUNTER_MULTIPLY , value : x});
export const Divide = (x) => ({type: COUNTER_DIVIDE , value : x});