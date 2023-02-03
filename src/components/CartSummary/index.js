// Write your code here
import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let amount = 0
          cartList.forEach(each => {
            amount += each.price * each.quantity
          })
          return (
            <div className="checkout-container">
              <h1 className="total-text">
                Order Total:
                <span className="span-amount">{`Rs ${amount}/-`}</span>
              </h1>
              <p className="items-cart-text">
                <span>{cartList.length}</span> items in cart
              </p>
              <button className="checkout-button">Checkout</button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary
