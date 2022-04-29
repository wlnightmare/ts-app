import axios from 'axios'
import { Dispatch } from 'redux'
import { User, UserAction, UserActionType } from '../../types/userTypes'

export const fetchUsers = () => (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionType.FETCH_USERS })
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then((res) => {
        dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: res.data })
    }).catch((e) => {
        dispatch({ type: UserActionType.FETCH_USERS_REJECT, payload: 'Ошибка при загрузке пользователей' })
    })
}