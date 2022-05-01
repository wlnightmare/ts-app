export enum TaskActionType {
  FETCH_TASKS = 'FETCH_TASKS',
  FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_REJECT = 'FETCH_TASKS_REJECT',
}
export type Item = {
  clientId:string,
  clientName:string,
  createTimestamp:string,
  plannedEndTime:string,
  plannedStartTime:string,
  taskId:string,
  taskTypeId:number,
  taskTypeName:string,
}
export type TaskState = {
  items: TaskStages[],
  loading: boolean,
  error?: string,
}

export type TaskStages = {
  items: Item[],
  stage: string,
  stageName: string,
} 

export type FetchTaskAction = {
  type: TaskActionType.FETCH_TASKS,
}
export type FetchTaskSuccessAction = {
  type: TaskActionType.FETCH_TASKS_SUCCESS,
  payload: TaskStages[]
}
export type FetchTaskRejectAction = {
  type: TaskActionType.FETCH_TASKS_REJECT,
  payload: string
}

export type TaskAction = FetchTaskAction | FetchTaskSuccessAction | FetchTaskRejectAction