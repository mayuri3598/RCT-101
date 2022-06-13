import { nanoid } from "nanoid"

export let SORT ="SORT"
export const ADD_TODO ="ADD_TODO"

export const DELETE_TODO = "DELETE_TODO"
export const EDIT  = "EDIT"
export const Toggle = "Toggle"

var count = 1
export let todos =(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}

export let deleteTodo = (by)=>{
    return {
        type:DELETE_TODO,
        payload:by
    }
}

export let sort = (by)=>{
    return{
      type:SORT,
      payload:by
    }
}


export const togglestatus = (value)=>{
    return{
        type:Toggle,
        payload:value
    }
}


export const edit = (value)=>{
    return{
        type:EDIT,
        payload:value
    }
}