import axios from 'axios'
import { Dispatch } from 'redux'
import { TaskStages, TaskAction, TaskActionType } from '../../types/taskTypes'

export const fetchTasks = () => (dispatch: Dispatch<TaskAction>) => {
    dispatch({ type: TaskActionType.FETCH_TASKS })
    axios.get<TaskStages[]>('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json').then((res) => {
        dispatch({ type: TaskActionType.FETCH_TASKS_SUCCESS, payload: res.data })
    }).catch((e) => {
        dispatch({ type: TaskActionType.FETCH_TASKS_REJECT, payload: 'Ошибка при загрузке taskov' })
    })
}