// import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
// import { actionTypes } from '../state/productstate/ActionTypes';
// import { initilState, productReducer } from '../state/productstate/ProductReducer';
// const PRODUCT_CONTEXT = createContext();
// const Productprovider = ({children}) => {
//     // const [data, setdata] = useState([]);
//     const [state, dispatch] = useReducer(productReducer, initilState);
//     console.log(state)
//     useEffect(()=>{
//         dispatch({type:actionTypes.FETCHING_START})
//         fetch("product.json")
//         .then(res=>res.json())
//         .then(data =>dispatch({type:actionTypes.FETCHING_SUCCESS, payload:data})
//         ).catch(() =>{
//             dispatch({type: actionTypes.FETCHING_ERROR});
//         })

//     },[]);
//     const value ={
//         state,dispatch
//     }
//     return <PRODUCT_CONTEXT.Provider value={value}>
//     {children}
// </PRODUCT_CONTEXT.Provider>
// };
// export const useProducts = () =>{
//     const context = useContext(PRODUCT_CONTEXT)
//     return context;
// }

// export default Productprovider;