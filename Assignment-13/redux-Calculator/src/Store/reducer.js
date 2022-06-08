import {COUNTER_INCREMENT , COUNTER_DECREMENT , COUNTER_MULTIPLY , COUNTER_DIVIDE} from "./action.type"

export const reducer = (state , action) => {
    console.log(state , action);
    switch(action.type){
        case COUNTER_INCREMENT: {
            return {...state , count : state.count+ + Number(action.value)} 
        }
        case COUNTER_DECREMENT: {
            return {...state , count : state.count- + Number(action.value)} 
        }
        case COUNTER_MULTIPLY: {
            return {...state , count : state.count* + Number(action.value)} 
        }
        case COUNTER_DIVIDE: {
            return {...state , count : state.count/ + Number(action.value)} 
        }

         default:{
          return state 
        }
    }
}


