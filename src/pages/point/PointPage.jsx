// PointPage.js

import React, {useState} from 'react';
import Navigation from '../../components/Navigation';
import PointHistoryCard from './PointHistoryCard';
import {useStore} from "../../store/useStore"
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const PointPage = () => {
    const {points, mode, setPoints} = useStore();
   

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chargePoints, setChargePoints] = useState('');

    const openModal = () => {
        setModalIsOpen((prev) => (!prev));
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleChargePoints = () => {
        if(chargePoints){
            setPoints(points+parseFloat(chargePoints));
            setChargePoints('');
            closeModal();
        }
        
    }

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setChargePoints(value);
      };


    const navigate = useNavigate();
  return (
    <div className="p-12">
      <Navigation />
      
      <div className="mt-8  p-24">
        <button onClick={() => navigate(-1)} className=" text-gray-400 my-3 text-sm font-base pl-2 mr-4">
          {"< BACK"}
      </button>
        <div className=' m-2 flex text-xl font-base'>
        <h1 className="">My Page</h1>
        <h1 className="px-4">{">"}</h1>
        <h1 className="">Points</h1>
        </div>
        <div className="flex mt-4">
          <div className="w-2/5 border-r pr-12">
            {/* 세로 선 좌측 */}
            <div className="mb-4">
              <div className="bg-gray-100 p-8 rounded-xl shadow-md my-4">
                <p className='font-semibold text-lg'>TOTAL POINTS</p>
                <p className='text-3xl text-right font-bold text-blue-600 pt-4'>{points} P</p>
              </div>
              {mode === "seller" &&<button onClick={openModal} 
              className="mt-4 bg-blue-500 text-white p-2 rounded-xl font-semibold shadow-md w-full h-16 text-lg">Charge Points</button>}
            </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal p-[25%]"
        contentLabel="Charge Points Modal"
      >
         <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Charge Points</h2>
          <button className="text-xl font-bold" onClick={closeModal}>X</button>
        </div>
        <input
          type="number"
          placeholder="Enter points to charge"
          value={chargePoints}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md mb-4"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChargePoints}>
          Charge
        </button>
      </Modal>
          </div>
          <div className="w-3/5 pl-12">
            {/* 세로 선 우측 */}
            <h2 className="text-lg font-semibold mb-4">Point History</h2>
            <div className="flex flex-col gap-4">
              {/* 포인트 사용 내역 */}
              <PointHistoryCard
                name="Nukak"
                item="wallet"
                points="-500"
              />
              <PointHistoryCard
                name="Point Top-up"
                points="+2000"
              />
              {/* 필요한 만큼 반복 */}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PointPage;
