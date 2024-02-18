import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import SearchBar from '../../components/SearchBar'
import ProductCard from './ProductCard'

const sampleProducts = [
  {
    id: 1,
    title: 'PRODUCT 1',
    company: 'COMPANY A',
    image: '../assets/Rectangle 5.svg',
    price: 29.99,
  },
  {
    id: 2,
    title: 'PRODUCT 2',
    company: 'COMPANY B',
    image: '이미지 링크 2',
    price: 39.99,
  },
  {
    id: 3,
    title: 'PRODUCT 3',
    company: 'COMPANY C',
    image: '이미지 링크 3',
    price: 49.99,
  },
  {
    id: 4,
    title: 'PRODUCT 1',
    company: 'COMPANY A',
    image: '../assets/Rectangle 5.svg',
    price: 29.99,
  },
  {
    id: 5,
    title: 'PRODUCT 2',
    company: 'COMPANY B',
    image: '이미지 링크 2',
    price: 39.99,
  },
  {
    id: 6,
    title: 'PRODUCT 3',
    company: 'COMPANY C',
    image: '이미지 링크 3',
    price: 49.99,
  },
  // ... 더 많은 상품 데이터
]

const ProductsMain = () => {
  return (
    <div>
      <div className="p-12">
        <Navigation />
        <div className="flex relative">
          <TabBar def={'products'} />
        </div>
        <SearchBar currentPage={'products'} />

        <div className="grid grid-cols-3 gap-[3%] mt-16 px-20">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              company={product.company}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsMain
