import React, { Component } from 'react';
import { storeBooks, detailBook} from '../data';

const BookContext = React.createContext();

class BookProvider extends Component {
    state = {
        books: [],
        detailBook: detailBook,
        cart: [],
        modalOpen: false,
        modalBook: detailBook,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        increment: this.increment,
        decrement: this.decrement,
        removeBook: this.removeBook,
        clearCart: this.clearCart
    }
    
    componentDidMount(){
        this.setBooks();
    }

    setBooks = () => {
        let tempBooks = [];
        storeBooks.forEach( item => {
            const singleItem = {...item};
            tempBooks = [...tempBooks, singleItem];
        });
        this.setState(()=>{
            return {books : tempBooks}
        })
    }

    getItem = (id) => {
        const book = this.state.books.find( item => item.id === id);
        return book;
    }

    handleDetail = (id) =>{
        const book = this.getItem(id);
        this.setState(()=>{
            return { detailBook: book }
        })
    }

    addToCart = (id) =>{ 
        let tempBooks = [...this.state.books];
        const index = tempBooks.indexOf(this.getItem(id));
        const book = tempBooks[index];
        book.inCart = true;
        book.count = 1;
        const price = book.price;
        book.total = price;

        this.setState(()=>{
            return {books: tempBooks, cart: [...this.state.cart, book]};
        },
        ()=>{
            this.addTotals();
        })
    }

    openModal = (id)=>{
        const book = this.getItem(id);
        this.setState(()=>{
            return { modalBook : book, modalOpen: true}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return { modalOpen: false }
        })
    }

    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedBook = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedBook);
        const book = tempCart[index];

        book.count = book.count + 1;
        book.total = book.count * book.price;
        
        this.setState(()=>{
            return { cart: [...tempCart] }
        },
            ()=>{
                this.addTotals();
            }
        )
    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedBook = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedBook);
        const book = tempCart[index];

        book.count = book.count - 1;
        
        if(book.count === 0){
            this.removeBook(id);
        }
        else{
            book.total = book.count * book.price;
            this.setState(()=>{
                return { cart: [...tempCart] }
            },
                ()=>{
                    this.addTotals();
                }
            )
        }
    }

    removeBook = (id) =>{
        let tempBooks = [...this.state.books];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempBooks.indexOf(this.getItem(id));
        let removedBook = tempBooks[index];
        removedBook.inCart = false;
        removedBook.count = 0;
        removedBook.total = 0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                books:[...tempBooks]
            }
            },
            ()=>{
                this.addTotals();
            }
        )
    }

    clearCart = () =>{
        this.setState(
            ()=>{
            return {cart: [] };
            },
            ()=>{
                this.setBooks();
            }
        )
    }

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map( item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubtotal: subTotal,
                cartTax : tax,
                cartTotal : total,
            }
        })
    }

    render() {
    return (
      <BookContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeBook: this.removeBook,
          clearCart: this.clearCart
      }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}


const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer};