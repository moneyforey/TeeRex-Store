import { createContext, useReducer} from "react"
import  {productReducer, initState } from "./reducer";
import { addtocart, filterdata, getdata } from "./types";
export const ProductContext = createContext();

const getData=async()=>{
   let res = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
   res = await res.json();
   return res;
}

const ProductContextProvider=({children})=>{
   const [state,dispatch] = useReducer(productReducer,initState);

   const getdataApi=()=>{
        getData().then((res)=>{
         dispatch({type:getdata,payload:res});
        }) 
   }

   const filterdataApi=(req)=>dispatch({type:filterdata,payload:req})
   
   const addtocartApi=(req)=>{
      dispatch({type:addtocart,payload:req})
   }

     return <ProductContext.Provider value={{...state,getdataApi,filterdataApi,addtocartApi}}>
        {children}
     </ProductContext.Provider>    
}

export default ProductContextProvider;