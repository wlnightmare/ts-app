import { styled } from "@mui/material"

export const ProductBlock = styled('div')`
  background: rgb(255, 255, 255);
  padding: 8px 12px;
  margin-bottom: 6px;
`
export const Header = styled('div')`
  display: flex;
  padding-bottom: 12px;
  margin-bottom: 6px;
`
export const Bottom = styled('div')`
  display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Img = styled('img')`
  object-fit:contain;
  width: 64px;
  height: 64px;
  flex: 0 0 auto;
  margin-right: 16px;
`
export const Title = styled('h3')`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  margin: 0px 0px 4px;
`
export const Discription = styled('p')`
  font-size: 12px;
  white-space:pre-wrap;
  color: rgb(92, 99, 112)
`
export const ProductCounter = styled('div')`
  background-color: rgb(243, 243, 247);
	box-sizing: border-box;
	border-radius: 9999px;
	height: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
`