import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load products')
        setLoading(false)
      })
  }, [])

  return { products, error, loading }
}

export default useFetchProducts
