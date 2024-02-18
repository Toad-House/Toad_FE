import React, {useState, useEffect} from 'react'
import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import { useNavigate, useParams } from 'react-router-dom'
import {ProductDetailApi} from "../../apis/products";
import {useStore} from "../../store/useStore";



const ProductDetail = () => {
  // const productData = {
  //   title: 'Frodo L Bag',
  //   company: 'nukak',
  //   price: 113.65,
  //   materials: 'Banner, tire inner tube, kite surfing sail',
  //   description: `Material: PVC Banner<br />Size: 80 X 310 X 90 (mm)<br />1. This bag is crafted by upcycling discarded advertising banners, and the bag straps are made from recycled safety belts. All materials are 100% waterproof.<br />2. Suitable for everyday activities and travel, this bag is particularly well-suited as a daily backpack, accommodating laptops up to 15 inches in size.<br />3. Features a front zipper pocket, an internal zipper pocket, and a Velcro pocket. Inside the bag, there is a separate compartment for storing tablets or notebooks.<br />4. For cyclists, the bag comes with additional straps to secure it while riding, and reflective 3M panels on both sides ensure a safe cycling experience.`,
  // }
  const {points} = useStore();
  const navigate = useNavigate()
  const {id} = useParams();
  const [productData, setProductData] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [userPoints, setUserPoints] = useState(points);

  

  const openModal = () => {
    setModalVisible(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductDetailApi(id);
        console.log(response);
        setProductData(response.data);
        console.log(productData)
        
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
          src={productData.imageUrl}
          alt={productData.productName}
          className=" object-contain w-2/5 h-72 mr-8 rounded-xl"
        />
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm font-light mb-2">
            {productData.companyName}
          </div>
          <div className="font-bold text-3xl mb-4">{productData.productName}</div>
          <div className="text-red-500 font-semibold text-xl mb-4">{`$${productData.productPrice}`}</div>
          <button className="bg-blue-500 text-white p-4 px-7 font-semibold text-base rounded-md my-4 w-80"
          onClick={openModal}>
            BUY
          </button>
          {isModalVisible && (
            <PurchaseModal productPrice={productData.productPrice}
             userPoints={userPoints}
             closeModal={closeModal} 
             />
          )}
          <div className="flex flex-row mt-10">
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: productData.productDesc }}
        className="text-gray-700 font-light text-sm px-6 m-8 mt-12"
      ></div>
    </div>
  )
}

const PurchaseModal = ({ productPrice, closeModal, userPoints}) => {
  const maxPoint = userPoints;
  const [localPoint, setLocalPoint] = useState(userPoints);
  const [remainingAmount, setRemainAmount]=useState(productPrice - userPoints);
  const {setPoints, points} = useStore();

  useEffect(() => {
    setRemainAmount(productPrice-localPoint);
  }, [localPoint])
  

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <p className="text-xl mb-4">Product Price: <span className='font-semibold text-blue-500'>${productPrice}</span></p>
        
        {/* User Points Input */}
        <div className="mb-4 flex ">
          <label className="block text-gray-700 mb-2 w-44 pt-2">Points to be used</label>
          <input
            className="w-[30%] p-2 border rounded-md bg-gray-100 px-4 -mx-10"
            type="number"
            value={localPoint}
            onChange={e => setLocalPoint(e.target.value)}
          />
        </div>
        <hr/>
        <p className="text-xl font-semibold mb-4 mt-10">Total payment amount <span className='pl-2 font-bold text-red-500 '>${remainingAmount}</span></p>

        <div className="flex justify-end">
          <button
            className="text-blue-500 px-4 py-2 mr-2 border border-blue-500 rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              if(localPoint > maxPoint){
                alert("You have entered more points than are available.");
              }else{
                alert("Purchase completed");
                closeModal();
                setPoints(points-localPoint)
            }
              
            }}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail
