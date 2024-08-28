import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const cartLength = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + parseInt(item.price * item.quantity),
        0,
      )
      return (
        <>
          <button
            type="button"
            className="removeButton"
            onClick={removeAllCartItems}
          >
            <p> Remove All </p>
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="cashoutBox">
            <p> {`Order Total: Rs ${totalPrice}`} </p>
            <p> {`${cartLength} items in cart`}</p>
            <button type="button" className="checkoutButton">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
