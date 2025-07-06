import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

function ProductItem({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 w-full object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col gap-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-sm text-gray-600 line-through">
              ${Math.round(product.price * 1.2)}
            </p>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
