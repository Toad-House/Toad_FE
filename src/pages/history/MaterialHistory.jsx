import Navigation from '../../components/Navigation'
import HistoryCard from './HistoryCard'
import { useNavigate } from 'react-router-dom'
import HistoryModal from '../../components/HistoryModal'
import React, { useState } from 'react'

const historyData = [
  {
    requestId: 1,
    materialId: 1,
    materialName: 'Sample Material',
    expectedDate: '2024-02-18',
    expectedTime: '15:30',
    points: 50,
    cancelReason: 'Not applicable',
    quantityOfMaterial: 100,
    collectionArea: 'Warehouse A',
    collectionState: 'applicated',
    userName: 'John Doe',
    userContact: 'john.doe@example.com',
    imageUrl:
      'https://github.com/Toad-House/Toad_FE/assets/86648265/5183d09e-4a08-43e8-bb71-69e548c53385',
  },
  {
    requestId: 1,
    materialId: 1,
    materialName: 'Sample Material',
    expectedDate: '2024-02-18',
    expectedTime: '15:30',
    points: 50,
    cancelReason: 'Not applicable',
    quantityOfMaterial: 100,
    collectionArea: 'Warehouse A',
    collectionState: 'approved',
    userName: 'John Doe',
    userContact: 'john.doe@example.com',
    imageUrl:
      'https://github.com/Toad-House/Toad_FE/assets/86648265/5183d09e-4a08-43e8-bb71-69e548c53385',
  },
  {
    requestId: 1,
    materialId: 1,
    materialName: 'Sample Material',
    expectedDate: '2024-02-18',
    expectedTime: '15:30',
    points: 50,
    cancelReason: 'Not applicable',
    quantityOfMaterial: 100,
    collectionArea: 'Warehouse A',
    collectionState: 'completed',
    userName: 'John Doe',
    userContact: 'john.doe@example.com',
    imageUrl:
      'https://github.com/Toad-House/Toad_FE/assets/86648265/5183d09e-4a08-43e8-bb71-69e548c53385',
  },
  {
    requestId: 1,
    materialId: 1,
    materialName: 'Sample Material',
    expectedDate: '2024-02-18',
    expectedTime: '15:30',
    points: 50,
    cancelReason: 'Not applicable',
    quantityOfMaterial: 100,
    collectionArea: 'Warehouse A',
    collectionState: 'canceled',
    userName: 'John Doe',
    userContact: 'john.doe@example.com',
    imageUrl:
      'https://github.com/Toad-House/Toad_FE/assets/86648265/5183d09e-4a08-43e8-bb71-69e548c53385',
  },
]

const MaterialHistory = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const openModal = (type) => {
    setModalType(type)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setModalType('')
  }

  const onSave = (content) => {
    console.log('Saved content:', content)
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
          <HistoryCard
            key={historyItem.requestId}
            historyItem={historyItem}
            openModal={openModal}
          />
        ))}
      </div>
      <HistoryModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onSave={onSave}
        modalType={modalType}
      ></HistoryModal>
    </div>
  )
}
export default MaterialHistory
