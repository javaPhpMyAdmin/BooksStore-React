import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { BookConsumer } from '../../components/Context'
import CartList from './CartList';
import CartTotals from './CartTotals'


export default class Cart extends Component {
  render() {
    return (
     <section>
        <BookConsumer>
          {
            value =>{
              const { cart } = value;
              if(cart.length > 0){
                return(
                  <React.Fragment>
                    <Title name='Tu' title='Carrito'/>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotals 
                      value={value} 
                      history={this.props.history}
                    />
                  </React.Fragment>
                );
              }else{
                return <EmptyCart/>
              }  
          }}
        </BookConsumer>         
      </section>    
     );
  }
}
