import { ActionType } from "../constants/ActionTypes"

export const increment = ()=>{
    return{
        type : ActionType.INCREMENT,
    }
}

export const decrement = ()=>{
    return{
        type : ActionType.DECREMENT,
    }
}