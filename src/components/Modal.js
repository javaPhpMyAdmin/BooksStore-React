import React, { Component } from 'react';
import styled from 'styled-components';
import { BookConsumer } from './Context'
import { ButtonContainer } from './ButtonContainer'
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <BookConsumer>
        {(value)=>{
            const {modalOpen, closeModal} = value;
            const {img, title, price } = value.modalBook;

            if(!modalOpen)
            {
                return null
            }else{
                return(
                    <ModalContainer>
                        <div className='container'>
                            <div className='row'>
                                <div 
                                    id='modal' 
                                    className='pd-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'
                                >
                                    <h5>libro agredado al carrito</h5>
                                    <img src={img} className='img-fluid'/>
                                    <h5>{title}</h5>
                                    <h5 className='text-muted'>
                                        price : $ {price}
                                    </h5>
                                    <Link to='/'>
                                        <ButtonContainer onClick={()=> closeModal()}>
                                            Continuar en la Tienda
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer cart onClick={()=> closeModal()}>
                                            Ver mi carrito
                                        </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                );
            }  
        }}
      </BookConsumer>
    );
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
    #modal {
        background: var(--mainWhite);
    }
`;