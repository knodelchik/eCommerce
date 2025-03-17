import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';
import Order from './Order';

const showOrder = (props) => {
    let sumOrder = 0
    props.order.forEach(el => {
        sumOrder += Number.parseFloat(el.price)
    });
    return (
        <div>
            {props.order.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='sum-order'>{new Intl.NumberFormat().format(sumOrder)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Cart is empty</h2>
        </div>
    )
}

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <FaShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className="shop-cart">
                        {props.order.length > 0 ?
                            showOrder(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation">
                <h1></h1>
            </div>
        </header>
    )
}

export default Header