import {Container, Grid} from "@mui/material";
// import { OrderFormModal } from "../components/shop/OrderFormModal";
import { useTypedSelector} from "../hooks/useTypedSelector";
import { ProductBlock } from "../components/shop/ProductBlock";
import { useDispatchActions } from "../hooks/useDispatchActions";
import { FC, useCallback, useEffect } from "react";
import { Basket } from "../components/shop/Basket";

export const ShopPage:FC = () => {
    const products = useTypedSelector((state) => state.shop.products)
    const {fetchProducts, addToBasket} = useDispatchActions()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])

    const handleAddToBasket = useCallback((id:number)=>{
        addToBasket(id)
    },[addToBasket])

    return (
        <Container maxWidth="xl" sx={{marginTop: 8,backgroundColor:'rgb(255, 255, 255)'}}>
            <Grid container spacing={2} >
                {products.map((product) => 
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductBlock product={product} onAddToBasket={()=>handleAddToBasket(product.id)}/>
                    </Grid> 
                )}
            </Grid>
            <Basket />
            {/* <OrderFormModal />  */}
        </Container>
    )
}
