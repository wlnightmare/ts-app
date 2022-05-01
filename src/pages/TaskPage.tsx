import { Container, Grid } from "@mui/material";
import { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatchTaskActions } from '../hooks/useDispatchActions'
import { TaskItem } from '../components/tasks/TaskItem'
import { styled } from '@mui/material'

const Header = styled('h2')`
  padding-top:20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  padding-left: 20px;
`
const Stages = styled("h2")`
  font-weight: 400;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  position: relative;
  color: #1D1D1F;
  &:after {
    content:"";
    position: absolute;
    width: 100%;
    height: 3px;
    top:100%;
    left: 10px;
    background-color: #787878;
    margin-top: 12px;
    &::hover {
      background-color: #1369BF;
    }
  }
`
const TaskCount = styled('span')`
  width: 7px;
  height: 14px;
  left: 6px;
  top: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border-radius: 50px;
  padding:2px 4px;
  color: #625f6d;
  background-color:#E0E0E0;
  margin-left: 4px;
`

export const TaskPage = () => {
  const { items, error, loading } = useTypedSelector((state) => state.task)
  const { fetchTasks } = useDispatchTaskActions()

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  if (loading) {
    return (
      <h1>Загрузка task</h1>
    )
  }
  if (error) {
    return (
      <h1 style={{ border: '1px solid red' }}>{error}</h1>
    )
  }
  return (
    <Container sx={{ backgroundColor: '#E5E5E5' }}>
      <Header>Задачи Нурманова Бабижана</Header>
      <Grid container sx={{ display: 'flex' }} spacing={3} >
        {items.map((task) =>
          <Grid item xs={12} sm={6} md={4} lg={12 / 5}>
            <Stages>
              {task.stageName}
              <TaskCount>{task?.items.length}</TaskCount>
            </Stages>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              {
                task.items.map((item) =>
                  <TaskItem task={item} key={item.taskId} />
                )
              }
            </div>
          </Grid>
        )}
      </Grid>
    </Container >
  )
}

