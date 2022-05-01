import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
//import * as userActionCreators from '../store/actions/userActionCreators'
import * as shopActionCreators from '../store/actions/shopActionCreators'
import * as taskActionCreators from '../store/actions/taskActionCreators'

export const useDispatchActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(shopActionCreators, dispatch)
    }, [dispatch])
}

export const useDispatchTaskActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(taskActionCreators, dispatch)
    }, [dispatch])
}