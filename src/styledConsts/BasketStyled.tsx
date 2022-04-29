import { ShoppingBag } from "@mui/icons-material"
import { styled } from "@mui/system"
import CloseIcon from '@mui/icons-material/Close';

export const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content:center;
  align-items:center;
  right: 20px;
  top: 100px;
  transition: 0.2s;
  `
export const BasketIcon = styled(ShoppingBag)`
  font-size: 50px;
  color: rgb(255, 105, 0);
  cursor:pointer;
`
export const EmptyBasket = styled('div')`
  display:flex;
  flex-direction: column;
  flex: 0 1 auto;
  padding: 30px;
  height: 100%;
  .note{
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-weight: bold;
  }
  .return {
    background-color: rgb(255, 105, 0);;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 24px;
    border-radius: 9999px;
    cursor: pointer;
  }
`
export const HeadTitle = styled('h1')`
  margin: 5px 10px 10px 30px;
  font-size: 24px;
  font-weight: 400px;
`
export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  margin-left: 10px;
`
export const HeaderSection = styled('section')`
  padding: 16px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CheckSection = styled('section')`
  padding: 16px;
`
export const Check = styled('div')`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding-bottom: 16px;
  .paymant {
    font-size: 18px;
    line-height: 18px;
    font-weight:bold;
    font-style:normal;
  }
`
export const StyledBox = styled('div')`
  background: rgb(243, 243, 247);
  display: flex;
  flex-direction:column;
  flex:1 1 auto;
`
