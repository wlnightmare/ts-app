import { Reducer } from 'redux'
import {TaskState, TaskAction, TaskActionType} from '../../types/taskTypes'

const initState = {
  items: [],
  loading: false, 
}

export const taskReducer:Reducer<TaskState,TaskAction> = (state = initState, action) => {
  switch(action.type){
    case TaskActionType.FETCH_TASKS:
            return { ...state, loading: true, error: undefined }
        case TaskActionType.FETCH_TASKS_SUCCESS:
            return { ...state, items: action.payload, loading: false }
        case TaskActionType.FETCH_TASKS_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
  }
} 