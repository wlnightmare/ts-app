import {Container, Grid} from "@mui/material";
// import {addToBasket, fetchProducts} from "../store/actions/shopActions";
// import { OrderFormModal } from "../components/shop/OrderFormModal";
import { useTypedSelector} from "../hooks/useTypedSelector";
import { ProductBlock } from "../components/shop/ProductBlock";
// import { Basket } from "../components/Basket";
// import {receivedProducts} from "../store/reducers/productsSlice"
import { useDispatchActions } from "../hooks/useDispatchActions";
import { useCallback, useEffect } from "react";

export const ShopPage = () => {
    const {products} = useTypedSelector(state => state.shop)
    const {fetchProducts, addToBasket} = useDispatchActions()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])

    const handleAddToBasket = useCallback((product:number)=>{
        addToBasket(product)
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
            {/* <Basket /> */}
            {/* <OrderFormModal />  */}
        </Container>
    )
}
