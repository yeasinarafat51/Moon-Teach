import { actionTypes } from "./ActionTypes";
export const initilState = {
    loading: false,
    products:[],
    error:false,
    cart:[],
    wishlist: [],
};
export const productReducer = (state,action) =>{
    switch(action.type){
        case actionTypes.FETCHING_START:
            return{
                ...state,
                loading:true,
                error:false,
            };
        case actionTypes.FETCHING_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload,
                error:false,
            };
        case actionTypes.FETCHING_ERROR:
            return{
                ...state,
                loading:false,
                products:action.payload,
                error:true,
            };
        case actionTypes.ADD_TO_CART:
            return{
                ...state,
               cart:[...state.cart,action.payload]
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                
                // wishlist:[]
                ...state,
            //    wishlist:state.wishlist.filter((curr)=>{
            //     return curr._id ===action.payload
            //    })
            };
            default:
                return state;
    }

}