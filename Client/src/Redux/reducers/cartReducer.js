import * as actionTypes from "../constants/cartConstants";

//cart reducer
export const cartReducer = (state={cartItems:[]}, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART :
            const item = action.payload
            const exist = state.cartItems.find(product=> product.id===item.id);

            if(exist){
                return {...state}
            }
            else{
                return {...state, cartItems:[...state.cartItems, item]}
            }

        case actionTypes.REMOVE_FROM_CART :
            if(action.payload==="all") return ({cartItems:[]})
            
            else
                return {...state, cartItems: state.cartItems.filter(product=> product.id !== action.payload)
                }
            
        default: return state;
    }
    
}