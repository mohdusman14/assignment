import { all } from 'redux-saga/effects'
import UserSaga from './UserSaga'


export default function* RootSaga(){
    yield all([UserSaga()])
}