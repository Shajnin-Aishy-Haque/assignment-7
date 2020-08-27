import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, course) => total + course.price, 0);
    console.log(total);
    let discount = 0;

    if (total > 35) {
        discount = cart.length/2;
    }

    total =(total - discount).toFixed(2) ;

    return (
        <div>

            <h3 style={{ textAlign: 'center' }}>Shopping Cart</h3>
            <p style={{ textAlign: 'center' }}>Items: {cart.length}</p>
            <p>Discount:{discount}</p>
            <p><b>Total:${total}</b></p>
            <button ><b>Check Out</b></button>
           
            




        </div>
    );
};

export default Cart;