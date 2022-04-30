import { Button, Divider } from "@mui/material"
import { FC } from "react"
import { Bottom, Discription, Header, Img, ProductBlock, ProductCounter, Title } from "../../styledConsts/BasketItemStyled"
import { Product } from "../../types/shopTypes"

type Props = {
  product: Product,
  onRemove: ()=>void,
  onIncrementProduct: ()=>void,
  onDecrementProduct: ()=>void,
  count: number,
}

export const BasketItem:FC<Props>=({ product, onRemove, onIncrementProduct,onDecrementProduct, count }) =>{
  return (
    <>
    <Divider variant="middle" style={{marginBottom:'10px'}}/>
    <ProductBlock>
      <Header style={{display:"flex"}}>
        <Img src={product.image} alt=""/>
        <div>
          <Title>{product.title}</Title>
          <Discription>{product.description}</Discription>
        </div> 
      </Header>
      <Bottom>
      <h3 style={{fontSize: "16px",fontWeight: "600", paddingLeft:'10px'}}>{product.price}$ </h3>
      <ProductCounter>
        <Button style={{cursor:"pointer", color:"rgb(0,0,0)"}} onClick={()=>onIncrementProduct()}>+</Button>
        <p>{count}</p>
        <Button style={{cursor:"pointer", color:"rgb(0,0,0)"}} onClick={()=>onDecrementProduct()}>-</Button>
        <Button onClick={()=>onRemove()}>Delete</Button>
      </ProductCounter>
      </Bottom>
    </ProductBlock>
  </>
  )
}