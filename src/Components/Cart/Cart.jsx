import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductContext} from '../../context';
import { useContext } from 'react';
import CartList from './CartList';
import CartTotals from './CartTotals';

function Cart() {
    const context = useContext(ProductContext);
    const {cart} = context;
    if(cart.length>0){
        return(
            <>
                <Title name="your" title="cart"/>
                <CartColumns />
                <CartList value={context}/>
                <CartTotals value={context}/>
            </>
        )
    }else{
        return (
            <>
                <EmptyCart />
            </>
    )}
}

export default Cart
