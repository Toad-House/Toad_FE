import Navigation from '../../components/Navigation'
import SearchBar from '../../components/SearchBar'
import MaterialCard from '../../components/MaterialCard'
import { MaterialDetailApi } from '../../apis/materials';
import React, { useState, useEffect } from 'react';

export default function MaterialDetail() {

  const [material, setMaterial] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MaterialDetailApi();
        setMaterial(response);
        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
}, []);

  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation></Navigation>
        <div className="w-56 px-4 py-2 text-base font-light text-center text-black border-2 rounded-tl-md rounded-tr-md">
          Material Sourcing
        </div>
        <hr></hr>
        <div className="w-11/12 p-16 m-10 border-2 border-gray rounded-3xl">
          <div className="flex w-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              className="w-1/4 rounded-3xl"
            ></img>
            <div>
              <div className="flex">
                <div>
                  <h1>waste leather</h1>
                </div>
                <div className="flex">
                  <p>600p</p>
                  <p>/1kg</p>
                </div>
              </div>
              <hr></hr>
              <div className="flex flex-col">
                <div className="flex">
                  <h2>Expected Condition</h2>
                  <p>Good, Intact, Slightly Damaged</p>
                </div>
                <div className="flex">
                  <h2>Produced Item</h2>
                  <p>Wallet</p>
                </div>
                <div className="flex">
                  <h2>Minimum Quantity</h2>
                  <p>2kg</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex">
              <h1>Collection Area</h1>
            </div>
            <hr></hr>
            <div className="flex flex-col">
              <div className="flex">
                <h2>Collection Available Area</h2>
                <p> Seoul and Metropolitan Area, South Korea</p>
              </div>
              <div className="flex">
                <h2>Collection Restricted Area</h2>
                <p>Other Regions in South Korea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
