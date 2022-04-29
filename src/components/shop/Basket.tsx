import {Button, Drawer, Divider, Badge} from "@mui/material";
import React, {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeFromBasket, incrementProduct, decrementProduct, openModalForm } from "../../store/actions/shopActionCreators";
import { BasketItem } from "./BasketItem";
import { BasketIcon, Check, CheckSection, CloseButton, EmptyBasket, HeaderSection, HeadTitle, StyledBox, Wrapper } from "../../styledConsts/BasketStyled";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopState } from "../../types/shopTypes";

export function Basket() {
    const [isOpen, setIsOpen] = useState(false)
    const {basket} = useTypedSelector((state) => state.shop as ShopState)
    
    const amount = useMemo(()=>
      basket.reduce((acc, product) => acc + product.count, 0
    ), [basket])

    const price = useMemo(()=>
      basket.reduce((acc,product) => acc + product.count * product.price, 0
    ), [basket])

    const dispatch = useDispatch()

    const handleRemoveFromBasket = useCallback((e:React.FormEvent, id:number) => {
      e.stopPropagation();
      removeFromBasket(id)
    }, [removeFromBasket])

    const handleIncrementProduct = useCallback((id:number) => {
      incrementProduct(id)
    },[incrementProduct])

    const handleDecrementProduct = useCallback((id:number) => {
      decrementProduct(id)
    },[decrementProduct])

    const handleModalOpen = useCallback (()=>{
      openModalForm()
    },[openModalForm])

    return (
      <>
      <Wrapper>
        <Badge badgeContent={amount} color="primary">
          <BasketIcon onClick={()=>setIsOpen(true)}></BasketIcon>
        </Badge>
      </Wrapper>
      <Drawer 
        anchor="right" 
        open={isOpen} 
        onClose={()=>setIsOpen(!isOpen)}
        >
        <StyledBox sx={{width:{md:'450px', xs:'100%'},}}>
        {basket.length > 0 ? (
          <>
          <HeaderSection>
            <HeadTitle>{amount} items for {price.toFixed(2)}$ </HeadTitle>
            <CloseButton onClick={()=>setIsOpen(!isOpen)}></CloseButton>
          </HeaderSection>
          <div>
            {basket.map((product) => (
              <BasketItem
                product={product}
                onRemove={()=>handleRemoveFromBasket}
                onIncrementProduct={()=>handleIncrementProduct}
                onDecrementProduct={()=>handleDecrementProduct}
                key={product.id}
                count={product.count}
              />
            ))}
          </div>
          <CheckSection>
          <Divider variant="middle" style={{marginTop:'10px',marginBottom:'10px'}}/>
            <Check>
              <p>{amount} items</p>
              <p>{price.toFixed(2)}$</p>
            </Check>
          <Divider variant="middle" style={{marginTop:'10px',marginBottom:'10px'}}/>
            <Check>
              <p className="paymant">Total paymant:</p>
              <p className="paymant">{price.toFixed(2)}$</p>
            </Check>
          </CheckSection>
          <Button onClick={handleModalOpen} style={{backgroundColor:'rgb(209, 87, 0)',
    color: 'rgb(0, 0, 0)',margin:'auto 15px 5px 15px', borderRadius:'10px'}}>Purchase</Button>
          </>
        ):(
          <EmptyBasket>
            <div className="note">
              <p>Your basket is empty :c</p>
              <p>Add something</p>
            </div>
              <Button className="return" onClick={()=>setIsOpen(!isOpen)}>Back to Shop</Button>
          </EmptyBasket>
        )}
      </StyledBox>
      </Drawer>
    </>
  )
}
