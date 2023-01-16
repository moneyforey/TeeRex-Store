import { addtocart, filterdata, getdata } from "./types";
export const initState = {
    products:[],
    filterProducts:[],
    cart:[],
    cartcount:0,
    cartTotal:0
 }

export const productReducer=(state=initState,{type,payload})=>{
      switch (type) {
        case getdata:{
            return{
                ...state,
                products:payload,
                filterProducts:payload
            }
        }  
        case filterdata:{
            return{
                ...state,
                filterProducts:payload
            }
        }
        case addtocart:{
            let sum = 0;
            for(let x of payload){
                sum += x.price*x.qty;
            }
            return{
                ...state,
                cart:payload,
                cartcount:payload.length,
                cartTotal:sum
            }
        }
        default:{
            return state;
        }
      }
}

