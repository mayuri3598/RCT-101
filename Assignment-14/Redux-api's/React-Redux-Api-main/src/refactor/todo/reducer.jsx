import { ADD_TODO ,DELETE_TODO, EDIT, SORT, todos, Toggle } from "./action";

export const reducer = (store ,{type , payload}) =>{



    switch(type){
       
        case ADD_TODO:return {todos:payload};
        case DELETE_TODO:return{...store,todos:store.todos.filter((e)=>e.id !==payload)}
        case SORT:return{...store,
            todos:[...store.todos].sort((a , b)=>a[payload] < b[payload] ? 1 : a[payload] > b[payload] ?  -1 : 0)}
        case Toggle:return{...store ,todos:[{...payload,status:!payload.status}]}   
        case EDIT:return{...store , todos:[{id:payload.id , title:payload.input_data}]}

        default:return store
    }

}