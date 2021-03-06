import React, { useContext } from 'react';
import styled from 'styled-components'
import { ProductContext } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

function Modal() {
    const {modalOpen , closeModal, modalProduct} = useContext(ProductContext);
    const {img, title, id, price } = modalProduct;
    if(!modalOpen){
        return null;
    }else{
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                            <h4>Item Added to the cart</h4>
                            <img src={img} alt="" className="img-fluid"/>
                            <h5>{title}</h5>
                            <h5 className="text-muted">Price: {price} </h5>
                        
                        <Link to='/'>
                            <ButtonContainer onClick={() => closeModal()}>
                                Store
                            </ButtonContainer>
                        </Link>
                        <Link to='/cart'>
                            <ButtonContainer cartBtn onClick={() => closeModal()}>
                                Go to Cart
                            </ButtonContainer>
                        </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`

export default Modal
