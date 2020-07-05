import React from 'react'

function CartItem({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} 
                    style={{width:"5rem", height:"5rem" }} 
                    alt=""
                    className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none font-weight-bold">Product :</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none font-weight-bold">Price :</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1 pt-1" onClick={() => decrement(id)}>
                        <i className="fa fa-minus"></i>
                    </span>
                    <span className="btn btn-black mx-1 pt-1">{count}</span>
                    <span className="btn btn-black mx-1 pt-1" onClick={() => increment(id)}>
                        <i className="fa fa-plus"></i>
                    </span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total: {total}</strong>
            </div>
        </div>
    )
}

export default CartItem
