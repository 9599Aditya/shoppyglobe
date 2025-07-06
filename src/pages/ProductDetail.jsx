import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null))
  }, [id])

  if (!product) return <div className="text-center mt-10">Loading product...</div>

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/2 object-cover rounded" />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
