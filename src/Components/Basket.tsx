import React from "react";
import { productCardType } from "./ProductCardSmall";

type PropsType = {
    cards : Array<productCardType>
}

export const Basket = React.memo((props : PropsType) => {
    const orderClickHandler = () => {
        alert(totalPrice)
    }
    let totalPrice = 0
    for(let i = 0;i<props.cards.length;i++){
        totalPrice += props.cards[i].price * props.cards[i].InBascet
    }
    return (
        <section>
            {props.cards.length > 0 ? props.cards.map((product : productCardType) => {
                return (
                    <section>
                        <img src={product.img}></img>
                        <span>{product.name}</span>
                        <span>{product.InBascet}</span>
                        <span>{product.price * product.InBascet + "P"}</span>
                        <button>Delete</button>
                    </section>
                )
            }) : <h1>No products in bascet</h1>}
            <h2>Total : {totalPrice}</h2>
            <button onClick={orderClickHandler}>Order</button>            
        </section>
    )
})