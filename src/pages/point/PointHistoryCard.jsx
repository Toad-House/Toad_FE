import React from 'react'

const PointHistoryCard = ({
  productName,
  companyName,
  receiveOrUse,
  point,
}) => {
  return (
    <div className="px-12 py-8 bg-white border border-gray-100 shadow-md rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex">
          <h3 className="text-lg font-semibold">{productName}</h3>
          {companyName && <p className="px-3">{' / '}</p>}
          <p className="text-gray-500">{companyName}</p>
        </div>
        <div className={receiveOrUse ? 'text-red-500' : 'text-green-500'}>
          {receiveOrUse ? <span>-</span> : <></>}
          {point}
        </div>
      </div>
    </div>
  )
}

export default PointHistoryCard
