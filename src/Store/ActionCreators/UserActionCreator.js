import { ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "../Constant";

export function getUserAction(){
    return {
        type:GET_USER
    }
}

export function addUserAction(data){
    return {
        type:ADD_USER,
        payload:data
    }
}

export function updateUserAction(data){
    return {
        type:UPDATE_USER,
        payload:data
    }
}

export function deleteUserAction(data){
    return {
        type:DELETE_USER,
        payload:data
    }
}