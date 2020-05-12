import React, { Component } from 'react';
import Book from './Book';
import Title from './Title';
import { BookConsumer } from './Context';


export default class Booklist extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            
            <Title name='Nuestros' title='libros'/>  
            
            <div className='row'>
              <BookConsumer>
                { value =>{
                  return value.books.map( book => {
                    return <Book key={book.id} book={ book }/>
                  });
                }}
              </BookConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
