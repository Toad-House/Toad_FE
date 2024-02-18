import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import SearchBar from '../../components/SearchBar'
import ProductCard from './ProductCard'
import { GetAllProductsApi } from '../../apis/products'
import { useEffect, useState } from 'react'

const ProductsMain = () => {
  const [products, setProducts] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllProductsApi()
        setProducts(response)
        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="p-12">
        <Navigation />
        <div className="relative flex">
          <TabBar def={'products'} />
        </div>
        <SearchBar currentPage={'products'} />

        <div className="grid grid-cols-3 gap-[3%] mt-16 px-20">
          {products.map((product) => (
            <ProductCard
              key={product.productId}
              id={product.productId}
              title={product.productName}
              company={'ToadHouse'}
              image={product.imageUrl}
              price={product.productPrice}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsMain
