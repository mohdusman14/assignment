import { takeEvery, put } from 'redux-saga/effects'
import { createUserApi, deleteUserApi, getUserApi, updateUserApi } from "../Services";
import { GET_USER_RED, GET_USER, ADD_USER_RED, ADD_USER, DELETE_USER_RED, DELETE_USER, UPDATE_USER_RED, UPDATE_USER } from '../Constant'



function* getUserSaga(data) {
    var result = yield getUserApi(data)
    yield put({ type: GET_USER_RED, result: 'Done', data: result })
}

function* createUserSaga(data) {
    var user = yield getUserApi(data)
    var item = user.find((d) => d.name === data.payload.name && d.id !== 0)
    if (item)
        yield put({ type: ADD_USER_RED, result: 'Fail', msg: 'Data Already Exist' })
    else {
        var result = yield createUserApi(data)
        yield put({ type: ADD_USER_RED, result: 'Done', data: result })
    }
}

function* deleteUserSaga(data){
    yield deleteUserApi(data)
    yield put({type:DELETE_USER_RED,result:'Done',data:data.payload})
}

function* updateUserSaga(data){
    yield updateUserApi(data.payload)
    yield put({type:UPDATE_USER_RED,result:'Done',data:data.payload})
}

export default function* UserSaga() {
    yield takeEvery(GET_USER, getUserSaga)
    yield takeEvery(ADD_USER, createUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga)
}