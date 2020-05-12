import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BookConsumer } from './Context';
import { ButtonContainer } from './ButtonContainer';

export default class DetailsBook extends Component {
  render() {
    return (
      <BookConsumer>
        {(value) =>{
          const {id, img, pages, inCart, title, info, price} = value.detailBook;
        
        return (
          <div className='container py-5'>
            <div className='row'>
              {/* book title */}
              <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            <div className='row'>
              {/* book info*/}
              <div className='col-10 mx-auto col-md-6 my-3'>
                <img src={img} className='img-fluid'/>
              </div>
              {/* book info */}
              <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                <h2>{title}</h2>
                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                pages: <span className='text-uppercase'>{pages}</span>
                </h4>
                <h4 className='text-blue'>
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                  Informacion smbre el libro: 
                </p>
                <p className='text-muted lead'>{info}</p>
                {/** Buttons */}
                <div className>
                  <Link to='/'>
                    <ButtonContainer>
                      Back to books
                    </ButtonContainer>
                  </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart? true : false}
                      onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart? 'In Cart' : 'add to cart'}
                    </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        )
        }}
      </BookConsumer>
    );
  }
}
