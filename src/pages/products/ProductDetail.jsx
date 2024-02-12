
import React from 'react';
import Navigation from "../../components/Navigation";
import TapBar from "../../components/TapBar";
import { useMatch, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const productData = {
    title: 'Frodo L Bag',
    company: 'nukak',
    price: 113.65,
    materials: 'Banner, tire inner tube, kite surfing sail',
    description: `소재 | PVC 현수막<br />사이즈 | 80 X 310 X 90 (mm)<br /> 1. 가방은 폐기된 광고 현수막을 업사이클링하였고, 가방 스트랩은 안전벨트를 업사이클링하여 제작되었습니다. 모든 소재는 100% 방수 가능합니다.<br />2. 일상 생활부터 여행까지 모두 가능하며 노트북 15인치까지 수납 가능한 사이즈로 데일리 백으로 특히 잘 어울립니다.<br />3. 전면 지퍼 포켓, 내부 지퍼 포켓&벨크로 포켓이 있습니다. 가방 안쪽에는 태블릿 또는 노트를 담기 위한 별도 수납 공간이 있습니다.<br />4. 자전거를 타신다면? 라이더를 위해 가방이 흘러내리지 않도록 잡아주는 추가 스트랩과 가방 양쪽 3M 반사판이 있어 안전한 라이딩을 할 수 있습니다.`,
  };
  const navigate = useNavigate();
  

  return (
    <div className="p-12 font-bold text-4xl">
      <Navigation />
      <TapBar def={'products'}/>
      <button className="text-black font-normal text-base rounded-md mx-10" onClick={()=>{navigate(-1)}}>{"< 이전으로"}</button>
      <div className="flex mt-8 p-6">
        <img src="https://nukak.kr/web/product/big/202312/75f08c112e031c2d5f199359a94065f9.png" alt={productData.title} className=" object-contain w-2/5 h-72 mr-8 rounded-xl" />
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm font-light mb-2">{productData.company}</div>
          <div className="font-bold text-3xl mb-4">{productData.title}</div>
          <div className="text-red-500 font-semibold text-xl mb-4">{`$${productData.price}`}</div>
          <button className="bg-blue-500 text-white p-4 px-7 font-semibold text-base rounded-md my-4">구매하기</button>
          <div className='flex flex-row mt-10'>
            <div className='text-base pr-2'>Materials Used for Upcycling:</div>
            <div className='text-base font-light mb-4'>{productData.materials}</div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: productData.description }} className="text-gray-700 font-light text-sm px-6 m-8 mt-12"></div>
    </div>
  );
};

export default ProductDetail;