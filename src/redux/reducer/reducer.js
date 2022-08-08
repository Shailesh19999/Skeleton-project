const init_state={
carts :[],

};

 export const cartReducer =(state = init_state,action)=>{
    switch (action.type) {
        case  "ADDITEM" :
            const itemindex = state.carts.findIndex((val)=> val.id === action.payload.id)
            if (itemindex >= 0){
                state.carts[itemindex].qnty += 1
            }
            else{
                const temp = {...action.payload, qnty: 1}
                return {
                    ...state,
                    carts: [...state.carts, temp]
                 }
            }
         
             case "DLTCART" :
                const data = state.carts.filter((val)=> val.id !== action.payload
                );
                return {
                    ...state,
                    carts : data
                }
                case "DECREMENT_ITEM":
                    const Removeitemindex = state.carts.findIndex((val)=> val.id === action.payload.id)
                    if(state.carts[Removeitemindex].qnty > 1)
                    {
                         state.carts[Removeitemindex].qnty -=1
                        return {
                            ...state,
                            carts: [...state.carts]
                        }
                    }

                    case "INCREMENT_ITEM":
                    const Additemindex = state.carts.findIndex((val)=> val.id === action.payload.id)
                    if(state.carts[Additemindex].qnty>=1)
                    {
                         state.carts[Additemindex].qnty +=1
                        return {
                            ...state,
                            carts: [...state.carts]
                        }
                    }

             default: 
             return state
}
 }