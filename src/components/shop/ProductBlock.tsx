import { FC } from "react";
import { Description, Image, Price, StyledBox, StyledButton, Title } from "../../styledConsts/ProductBlockStyled";
import { Product } from "../../types/shopTypes";

type Props = {
  product: Product,
  onAddToBasket: ()=>void,
}

export const ProductBlock:FC<Props>=({product, onAddToBasket}) =>{
    return (
        <StyledBox>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Price>{product.price}$</Price>
            <StyledButton onClick={()=>onAddToBasket()}>Add to Basket</StyledButton>
            </div>
        </StyledBox>
    )
} 