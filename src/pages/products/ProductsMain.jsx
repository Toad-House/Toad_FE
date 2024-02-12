import  Navigation from "../../components/Navigation";
import  TapBar  from "../../components/TapBar";
import SearchBar from "../../components/SearchBar";
import ProductCard from "./ProductCard";


const sampleProducts = [
  { id: 1, title: '상품 1', company: '회사 A', image: '../assets/Rectangle 5.svg', price: 29.99 },
  { id: 2, title: '상품 2', company: '회사 B', image: '이미지 링크 2', price: 39.99 },
  { id: 3, title: '상품 3', company: '회사 C', image: '이미지 링크 3', price: 49.99 },
  { id: 4, title: '상품 1', company: '회사 A', image: '../assets/Rectangle 5.svg', price: 29.99 },
  { id: 5, title: '상품 2', company: '회사 B', image: '이미지 링크 2', price: 39.99 },
  { id: 6, title: '상품 3', company: '회사 C', image: '이미지 링크 3', price: 49.99 },
  // ... 더 많은 상품 데이터
];


const ProductsMain = () => {

  return (
    <div>
      <div className="p-12 font-bold text-4xl">
        <Navigation />
        <TapBar def={'products'}/>
        <SearchBar currentPage={'products'}/>

        {/* 3열 격자로 상품을 나타내기 */}
      <div className="grid grid-cols-3 gap-2 mt-10">
        {sampleProducts.map(product => (
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
