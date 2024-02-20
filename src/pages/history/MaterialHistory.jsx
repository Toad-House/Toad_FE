import Navigation from '../../components/Navigation'
import HistoryCard from './HistoryCard'
import { useNavigate } from 'react-router-dom'
import HistoryModal from '../../components/HistoryModal'
import React, { useState, useEffect } from 'react'
import { GetAllRequestCompanyApi, ChangeRequestStateCompanyApi,GetAllRequestConsumerApi } from '../../apis/history'
import {useStore} from "../../store/useStore";
import BuyerHistoryCard from "./BuyerHistoryCard"

const MaterialHistory = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [requestId, setRequestId] = useState(null)
  const [historyData, setHistoryData] = useState([])
  const [updateData, setUpdateData] = useState({
    requestId: 0,
    collectionState: "",
    expectedDate: "",
    expectedTime: "",
    cancelReason: "",
    points: 0,
  })
  const {mode} = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = mode === "seller" ? await GetAllRequestCompanyApi(1) : await GetAllRequestConsumerApi(1);
        console.log(response);
        setHistoryData(response)
      } catch (error) {
        console.error('Error fetching material details:', error)
      }
    }

    fetchData()
  }, [])

  const openModal = (type, requestId) => {
    setModalType(type)
    setUpdateData(prevState => (
      { ...prevState, collectionState: type, requestId: requestId }))
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setModalType('')
    setRequestId(null)
  }

  const onSave = (content) => {
    if (content.expectedDate && content.expectedTime) {
      setUpdateData(prevState => ({ ...prevState, expectedDate: content.expectedDate, expectedTime: content.expectedTime }))
    }
    else if (content.points) {
      setUpdateData(prevState => ({ ...prevState, points: content.points }))
    }
    else if (content.cancelReason) {
      setUpdateData(prevState => ({ ...prevState, cancelReason: content.cancelReason }))
    }

    ChangeRequestStateCompanyApi({ params: updateData })
      .then(() => {
        GetAllRequestCompanyApi(1)
          .then(response => {
            setHistoryData(response);
          })
          .catch(error => {
            console.error('Error fetching material details:', error);
          });
      })
      .catch(error => {
        console.error('Error changing request state:', error);
      });
  }

  return (
    <div>
      <Navigation />
      <button
        className="mx-16 mt-2 text-base font-normal text-gray-800 rounded-md"
        onClick={() => {
          navigate(-1)
        }}
      >
        {'< BACK'}
      </button>
      <div className="max-w-screen p-6 mt-[3%] mx-[12%]">
        <h1 className="mb-6 text-3xl font-semibold">Material History</h1>
        {historyData.map((historyItem) => (
          mode === 'seller' ? 
          <HistoryCard
            key={historyItem.requestId}
            historyItem={historyItem}
            openModal={openModal}
          /> : 
          <BuyerHistoryCard 
          key={historyItem.requestId}
          historyItem={historyItem}
          openModal={openModal}>
          </BuyerHistoryCard>
        ))}
      </div>
      <HistoryModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onSave={onSave}
        modalType={modalType}
        requestId={requestId}
      ></HistoryModal>
    </div>
  )
}
export default MaterialHistory
