import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const CartContainer = () => {
   
  const dispatch = useDispatch()
  const {cart, total, amount} = useSelector((state)=> state.storeReducer)
  useEffect(()=>{
      dispatch({type : "GET_TOTALS"})
  }, [cart])
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={()=>dispatch({type : "CLEAR_CART"})} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
