import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Global_state_type } from "../Redux/Store";
import { ProductCardSmall, productCardType } from "./ProductCardSmall";

type PropsType = {
    cards : Array<productCardType>
}

export const ProductList = React.memo((props : PropsType) => {

    let currentCategory = useSelector((state : Global_state_type) => {return state.app.currentCategory})
    let [state,setState] = useState(currentCategory)
    return(
        <section>
            {props.cards.length > 0 ? props.cards.map((product : productCardType) => {
                if(product.category === currentCategory){
                return (
                    <>
                        <ProductCardSmall category={product.category} InBascet={0} name={product.name} isAvalable={product.isAvalable} price={product.price} description={product.description} img={product.img}/>
                    </>
                )}else{
                    return null
                }
            }) : <h1>No products avalable</h1>}
        </section>
    )
})