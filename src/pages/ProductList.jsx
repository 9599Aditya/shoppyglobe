import React, { useState } from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductItem from '../components/ProductItem'

function ProductList() {
  const { products, error, loading } = useFetchProducts()
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-4 p-2 border rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
