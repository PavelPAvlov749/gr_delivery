import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { app_actions, category } from "../Redux/AppReducer";
import { Global_state_type } from "../Redux/Store";

export type productCardType = {
    name : string,
    description : string,
    img : string,
    price : number,
    isAvalable : boolean,
    InBascet : number,
    category : category
}



export type propsType = {
    cards : Array<productCardType>
}

export const ProductCardSmall : React.FC<productCardType> = React.memo((props : productCardType) => {
    const dispatch = useDispatch()
    const addInBasket = () => {
        dispatch(app_actions.addToBasket({...props}))
    }
            return (
                <div>
                    <img src={props.img} alt="" />
                    <br />
                    <span>{props.name}</span>
                    <br />
                    {props.description ? props.description : null}
                    <h4>{props.price + "P"}</h4>
                    {props.isAvalable ? <button onClick={addInBasket}>Add</button> : <span>Out of stock</span>}
                </div>
            )

})