import cartItems from "../cart-items";

const initialStore = {
    cart : cartItems,
    amount : 0,
    total : 0
}

const storeReducer = (state = initialStore, action) => {
    if (action.type === "CLEAR_CART"){
        return {...state, cart: []}
    }
    if (action.type === "REMOVE"){
        const {cart} = state
        const newObject = cart.filter((cart)=>action.payload.id !== cart.id)
        return {...state, cart : newObject}
    }

    if (action.type === "TOOGLE"){
        
        const {cart} = state
        const newObject = cart.map((cart)=>{
           if (action.payload.id === cart.id){
              if (action.payload.param === "inc") {
                 return {...cart, amount : cart.amount + 1}
              }
              else if (action.payload.param === "dec") {
                return {...cart, amount : cart.amount - 1}
             }  
           }
           return cart
        })
        return {...state, cart : newObject}
    }

    if (action.type === "GET_TOTALS"){
        const {cart} = state
        const newObject = cart.reduce((Total, item)=>{
            const {amount, price} = item
           Total.sumAmount += amount
           let cartTotal = amount * price
           Total.sumTotal += cartTotal
           return Total
        }, {sumAmount : 0, sumTotal : 0})
        let {sumAmount, sumTotal} = newObject
        sumTotal = parseFloat(sumTotal.toFixed(2))
        return {...state, amount : sumAmount, total : sumTotal}
    }




    return state
}

export default storeReducer