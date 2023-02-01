import { type } from "os";
import { productCardType } from "../Components/ProductCardSmall";
import { InferActionType } from "./Store";

const SET_CATEGORY = "app_reducer/currentCategory/Set"
const ADD_TO_BASCET = "app_reducer/currentCategory/AddToBascet"
const REMOVE_FROM_BASCET = "app_reducer/currentCategory/RemoveFromBascet"

export type category =  "Burgers" | "Salads" | "Hot appetizers" | "Soups" | "Drinks"


type initial_state_type = {
    currentCategory : category,
    basket : Array<productCardType>
}

let initial_state : initial_state_type = {
    currentCategory : "Burgers",
    basket : [] as productCardType[]
}

//Acrtion types
type Action_Type = InferActionType<typeof app_actions>;

export const appReducer = (state = initial_state, action: Action_Type) => {
    switch (action.type) {
        case SET_CATEGORY : {
            return {
                ...state,
                currentCategory : action.payload
            }
        }
        case  ADD_TO_BASCET : {
            return {
                ...state,
                basket : state.basket.concat(action.payload)
            }
        }
        default:
            return state
    }
}

export const app_actions = {
    setCategory : (category : category) => ({
        type : "app_reducer/currentCategory/Set",
        payload : category
    } as const),
    addToBasket : (product : productCardType) => ({
        type : "app_reducer/currentCategory/AddToBascet",
        payload : product
    } as const )


}

