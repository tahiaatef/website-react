import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart , incrementQuantity, decrementQuantity } from '../../redux/actions/action';
import {  Dash,Plus, X } from 'react-bootstrap-icons';
function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = productId => {
    dispatch(removeFromCart(productId));
  };
  const handleIncrementQuantity = productId => {
    dispatch(incrementQuantity(productId));
  };
  const handleDecrementQuantity = productId => {
    dispatch(decrementQuantity(productId));
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Math.floor(item.price) * item.quantity , 0);
  };
  return (
    <>
    <section className="cart-items">
        <div className="container-fluid">
          <div className='row justify-content-between '>
          <div className="cart-details  col-lg-7 col-12">
            {cartItems.length === 0 && (
              <h1 className="no-items product">No Items are added in Cart</h1>
            )}

            {cartItems.map((item) => {
              const productQty = Math.floor(item.price)  * item.quantity;

              return (
                <div className=" cart-list py-3  product d-flex justify-content-between " key={item.id}>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details flex-grow-1 ">
                    <h3>{item.title}</h3>
                    <h4>
                      ${Math.floor(item.price)}.00 * {item.quantity}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart"
                      onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <X size={30}/>
                      </button>
                    </div>
                    <div className="cartControl d-flex">
                      <button
                        className="incCart"
                        onClick={() => handleIncrementQuantity(item.id)}
                      >
                        <Plus size={30} />
                      </button>
                      <button
                        className="desCart"
                        onClick={() => handleDecrementQuantity(item.id)}
                      >
                        <Dash/>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-12 cart-total product">
            <h2>Cart Summary</h2>
            <div className="d-flex justify-content-between ">
              <h4>Total Price :</h4>
              <h3>${calculateTotalPrice()}.00</h3>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
