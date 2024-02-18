import React from 'react'

const HistoryCard = ({ historyItem, openModal }) => {
  console.log(historyItem)
  const badgeColor = (state) => {
    switch (state) {
      case 'applicated':
        return 'bg-yellow-500 text-white'
      case 'approved':
        return 'bg-green-500 text-white'
      case 'canceled':
        return 'bg-red-500 text-white'
      case 'completed':
        return 'bg-blue-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const renderButtons = (state) => {
    switch (state) {
      case 'applicated':
        return (
          <>
            <button
              onClick={() => openModal('approve')}
              className="w-full px-4 py-2 my-2 mb-2 text-white bg-green-500 rounded-md"
            >
              Approve
            </button>
            <button
              onClick={() => openModal('cancel')}
              className="w-full px-4 py-2 my-2 text-white bg-red-500 rounded-md"
            >
              Cancel
            </button>
          </>
        )
      case 'approved':
        return (
          <button
            onClick={() => openModal('complete')}
            className="px-4 py-2 my-2 text-white bg-blue-500 rounded-md"
          >
            Complete
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-4 my-6 bg-white border border-gray-200 rounded-md shadow-md">
      <div className="relative flex flex-row">
        <img
          src={historyItem.imageUrl}
          alt={historyItem.materialName}
          className="object-cover h-32 my-1 ml-2 rounded-md w-44 mr-7"
        />
        <div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">
                {historyItem.materialName}
              </h2>
              <p
                className={` mx-5 px-5 rounded-md ${badgeColor(historyItem.collectionState)}`}
              >
                {`${historyItem.collectionState}`}
              </p>
            </div>
            {(historyItem.collectionState === 'approved' ||
              historyItem.collectionState === 'completed') && (
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-500">{`Expected Date: ${historyItem.expectedDate} /  Time: ${historyItem.expectedTime}`}</p>
              </div>
            )}
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600">{`Quantity of Material: ${historyItem.quantityOfMaterial}g`}</p>
              {historyItem.collectionState === 'completed' && (
                <p className="text-blue-500">{`Points: ${historyItem.points} P`}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              {historyItem.collectionState === 'canceled' ? (
                <p className="text-gray-600">{`Cancel Reason: ${historyItem.cancelReason}`}</p>
              ) : (
                <p className="text-gray-600">{`Collection Area: ${historyItem.collectionArea}`}</p>
              )}
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{`${historyItem.userName} / ${historyItem.userContact}`}</p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col w-44 right-2 top-2">
          {renderButtons(historyItem.collectionState)}
        </div>
      </div>
    </div>
  )
}

export default HistoryCard
