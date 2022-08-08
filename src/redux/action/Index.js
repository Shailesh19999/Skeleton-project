// Add to cart
export const ADD =(item)=>{
    return{
        type: "ADDITEM",
        payload : item
    }
}
// delete from cart
export const DLT =(id)=>{
    return{
        type: "DLTCART",
        payload : id
    }
}
// decrement
// delete from cart
export const DECRE =(item)=>{
    return{
        type: "DECREMENT_ITEM",
        payload : item
    }
}
// INCREMENT_ITEM

export const INCRE =(item)=>{
    return{
        type: "INCREMENT_ITEM",
        payload : item
    }
}
