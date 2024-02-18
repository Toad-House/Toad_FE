import React, {useState, useEffect} from 'react'
import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import { useNavigate, useParams } from 'react-router-dom'
import {ProductDetailApi} from "../../apis/products";

const ProductDetail = () => {
  // const productData = {
  //   title: 'Frodo L Bag',
  //   company: 'nukak',
  //   price: 113.65,
  //   materials: 'Banner, tire inner tube, kite surfing sail',
  //   description: `Material: PVC Banner<br />Size: 80 X 310 X 90 (mm)<br />1. This bag is crafted by upcycling discarded advertising banners, and the bag straps are made from recycled safety belts. All materials are 100% waterproof.<br />2. Suitable for everyday activities and travel, this bag is particularly well-suited as a daily backpack, accommodating laptops up to 15 inches in size.<br />3. Features a front zipper pocket, an internal zipper pocket, and a Velcro pocket. Inside the bag, there is a separate compartment for storing tablets or notebooks.<br />4. For cyclists, the bag comes with additional straps to secure it while riding, and reflective 3M panels on both sides ensure a safe cycling experience.`,
  // }
  const navigate = useNavigate()
  const {id} = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming getProductById is an async function that fetches product details by id
        const response = await ProductDetailApi(id);
        setProductData(response);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-12">
      <Navigation />
      <TabBar def={'products'} />
      <button
        className="text-black font-normal text-base rounded-md mx-10"
        onClick={() => {
          navigate(-1)
        }}
      >
        {'< BACK'}
      </button>
      <div className="flex mt-8 p-6">
        <img
          src="https://nukak.kr/web/product/big/202312/75f08c112e031c2d5f199359a94065f9.png"
          alt={productData.title}
          className=" object-contain w-2/5 h-72 mr-8 rounded-xl"
        />
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm font-light mb-2">
            {productData.company}
          </div>
          <div className="font-bold text-3xl mb-4">{productData.title}</div>
          <div className="text-red-500 font-semibold text-xl mb-4">{`$${productData.price}`}</div>
          <button className="bg-blue-500 text-white p-4 px-7 font-semibold text-base rounded-md my-4">
            BUY
          </button>
          <div className="flex flex-row mt-10">
            <div className="text-base pr-2">Materials Used for Upcycling:</div>
            <div className="text-base font-light mb-4">
              {productData.materials}
            </div>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: productData.description }}
        className="text-gray-700 font-light text-sm px-6 m-8 mt-12"
      ></div>
    </div>
  )
}

export default ProductDetail
