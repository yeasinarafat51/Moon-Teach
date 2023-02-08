import { ADD_TO_CART, REMOVE_TO_CART } from "./Actions/Actionsstypes";

const initilState = {
    cart: [],
};


const productReducers = (state = initilState, action)=> {
    const selectproduct = state.cart.find((product)=> product._id === action.payload._id)
    console.log(selectproduct);
    switch(action.type){
        case ADD_TO_CART:
            if(selectproduct){
                const newcart = state.cart.filter((product) => product._id !== selectproduct._id)
                selectproduct.quantity = selectproduct.quantity + 1;

                return {
                    ...state,
                    cart:[...newcart, selectproduct],
                };
            }
        return{
            ...state,
            cart:[...state.cart ,{...action.payload, quantity:1}]
        };
        case REMOVE_TO_CART:
            if(selectproduct.quantity>1){
                const newcart = state.cart.filter((product) => product._id !== selectproduct._id)
                selectproduct.quantity = selectproduct.quantity - 1;

                return {
                    ...state,
                    cart:[...newcart, selectproduct],
                };
            }
            
            return {
                ...state,
                cart:state.cart.filter((product)=>product._id !== action.payload._id)
            };

        default:
            return state;
    }
}
export default productReducers