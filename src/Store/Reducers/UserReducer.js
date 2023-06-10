import { ADD_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED } from "../Constant";

export default function UserReducer(state=[],action){
    // console.log(action)
    switch(action.type){
        case GET_USER_RED:
            // console.log(action.data)
            return action.data
        case ADD_USER_RED:
            if(action.result==='Fail'){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        case UPDATE_USER_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        case DELETE_USER_RED:
            var  newState = state.filter((item)=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
}