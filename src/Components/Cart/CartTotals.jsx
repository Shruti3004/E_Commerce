import React from 'react'
import {Link} from 'react-router-dom'

function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 mx-auto col-sm-8 text-capitalize text-center">
                        <Link to='/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-4 font-weight-bold" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <h4 className="font-weight-bold">
                                SubTotal: {cartSubTotal}
                            </h4>
                        </h5>
                        <h5>
                            <h4 className="font-weight-bold">
                                Tax: {cartTax}
                            </h4>
                        </h5>
                        <h5>
                            <h4 className="font-weight-bold">
                                CartTotal: {cartTotal}
                            </h4>
                        </h5>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default CartTotals
