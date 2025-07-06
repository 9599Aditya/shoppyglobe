import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded mb-2">
      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-blue-600">${item.price * item.quantity}</span>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
