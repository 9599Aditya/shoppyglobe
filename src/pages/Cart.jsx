import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

function Cart() {
  const items = useSelector(state => state.cart.items)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">🛒 Your Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="bg-white p-6 shadow rounded text-center">
          <p className="text-gray-600">Cart is empty. <Link to="/" className="text-blue-500 underline">Shop now</Link></p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
