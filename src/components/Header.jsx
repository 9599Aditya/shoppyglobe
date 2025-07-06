import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold text-blue-600">ShoppyGlobe</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/cart" className="relative hover:text-blue-600">
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}

export default Header
