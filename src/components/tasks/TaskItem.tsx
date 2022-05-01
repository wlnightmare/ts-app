import { FC } from 'react'
import { Item } from '../../types/taskTypes';
import { styled } from '@mui/material'

type Props = {
    task: Item
}
const Wrapper = styled('div')`
    width: 230px;
    height: 130px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 25px;
    transition: 0.2s;
    &:hover {
        box-shadow: 0px 10px 2px rgba(0, 0, 0, 0.05)
    }
`
const StyledCard = styled('div')`
    margin: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:8px;
`
const StyledName = styled('p')`
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
`
const StyledType = styled('div')`
    padding: 4px;
    width: 58px;
    height: 22px;
    background: #27AE60;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    text-align:center;
    color: #FFFFFF;
    white-space: pre-line;
    overflow: hidden;
`
const StyledImg = styled('img')`
    width: 24px;
    height: 24px;
    object-fit:contain;
    top: 0;
    right: 0;
`

export const TaskItem: FC<Props> = ({ task }) => {
    return (
        <Wrapper >
            <StyledCard>
                <StyledType>{task.taskTypeName}</StyledType>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 400, fontSize: '12px', lineHeight: '14px', color: "#787878" }}>{new Date(task.createTimestamp).toLocaleDateString()} в {new Date(task.createTimestamp).toLocaleTimeString()}</span>
                    <StyledImg src='https://media.istockphoto.com/vectors/user-icon-flat-style-isolated-on-white-background-vector-id1084418050?s=612x612'></StyledImg>
                </div>
                <StyledName>{task.clientName}</StyledName>
            </StyledCard>

        </Wrapper>

    )
} 