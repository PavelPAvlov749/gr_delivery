import React from "react";
import { useDispatch } from "react-redux";
import { app_actions } from "../Redux/AppReducer";

export const Navbar = React.memo(() => {
    const productCategories = ["Burgers","Salads","Soups","Hot appetizers","Drinks"]
    let currentGategory = null
    let dispatch = useDispatch()
    return (
        <section>
            <ul>
                <li onClick={() => { console.log("dfsdf") 
                dispatch(app_actions.setCategory("Burgers"))}}>
                    <span>{productCategories[0]}</span>
                </li>
                <li onClick={() => {dispatch(app_actions.setCategory("Salads"))}}>
                <   span>{productCategories[1]}</span>
                </li>
                <li onClick={() => {dispatch(app_actions.setCategory("Hot appetizers"))}} >
                    <span>{productCategories[2]}</span>
                </li>
                <li onClick={() => {dispatch(app_actions.setCategory("Soups"))}}>
                    <span>{productCategories[3]}</span>
                </li>
                <li onClick={() => {dispatch(app_actions.setCategory("Drinks"))}} > 
                    <span>{productCategories[4]}</span>
                </li>
            </ul>
        </section>
    )
})