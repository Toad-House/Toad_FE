import React from "react";

const HistoryCard = ({historyItem}) => {
    console.log(historyItem)
    const badgeColor = (state) => {
        switch (state) {
          case "applicated":
            return "bg-yellow-500 text-white";
          case "approved":
            return "bg-green-500 text-white";
          case "canceled":
            return "bg-red-500 text-white";
          case "completed":
            return "bg-blue-500 text-white";
          default:
            return "bg-gray-500 text-white";
        }
      };

      const renderButtons = (state) => {
        switch (state) {
          case "applicated":
            return (
              <>
                <button className="bg-green-500 w-full text-white px-4 py-2 my-2 rounded-md mb-2">
                  Approve
                </button>
                <button className="bg-red-500 w-full text-white px-4 py-2 my-2 rounded-md">
                  Cancel
                </button>
              </>
            );
          case "approved":
            return (
              <button className="bg-blue-500 text-white px-4 py-2 my-2 rounded-md">
                Complete
              </button>
            );
          default:
            return null;
        }
      };

  return (
    <div className="bg-white border border-gray-200 p-4 my-6 shadow-md rounded-md">
        <div className="flex flex-row relative">
            <img
                src={historyItem.imageUrl}
                alt={historyItem.materialName}
                className="my-1 object-cover w-44 h-32 rounded-md mr-7 ml-2"
            />
        <div>
        <div>
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">{historyItem.materialName}</h2>
                <p className={` mx-5 px-5 rounded-md ${badgeColor(historyItem.collectionState)}`}>
                    {`${historyItem.collectionState}`}
                </p>
            </div>
            {(historyItem.collectionState === 'approved' || historyItem.collectionState === 'completed') && <div className="flex items-center justify-between mb-3">
                <p className="text-gray-500">{`Expected Date: ${historyItem.expectedDate} /  Time: ${historyItem.expectedTime}`}</p>
            </div>}
            <div className="flex items-center justify-between mb-3">
                <p className="text-gray-600">{`Quantity of Material: ${historyItem.quantityOfMaterial}g`}</p>
                {historyItem.collectionState === 'completed' &&<p className="text-blue-500">{`Points: ${historyItem.points} P`}</p>}
            </div>
            <div className="flex items-center justify-between">
                {historyItem.collectionState === "canceled" ?
                <p className="text-gray-600">{`Cancel Reason: ${historyItem.cancelReason}`}</p> :
                <p className="text-gray-600">{`Collection Area: ${historyItem.collectionArea}`}</p>}
                
            </div>
            <div className="mt-4">
                <p className="text-gray-600">{`${historyItem.userName} / ${historyItem.userContact}`}</p>
            </div>
      </div>
        
      </div>
      <div className="flex flex-col w-44 absolute right-2 top-2">
        {renderButtons(historyItem.collectionState)}
      </div>
      
      </div>
    </div>
  );
};

export default HistoryCard;
