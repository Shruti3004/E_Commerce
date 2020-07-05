import React from 'react'

function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Products
                    </h5>
                </div>
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Name of products
                    </h5>
                </div>
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Price
                    </h5>
                </div>
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Quantity
                    </h5>
                </div>
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Remove
                    </h5>
                </div>
                <div className="col-12 mx-auto col-lg-2 font-weight-bold">
                    <h5 className="font-weight-bold">
                        Total
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default CartColumns
