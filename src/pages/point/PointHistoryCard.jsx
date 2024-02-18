import React from 'react'

const PointHistoryCard = ({ name, item, points }) => {
  return (
    <div className="bg-white px-12 py-8 rounded-xl shadow-md border-gray-100 border">
      <div className="flex justify-between items-center">
        <div className="flex">
          <h3 className="text-lg font-semibold">{name}</h3>
          {item && <p className="px-3">{' / '}</p>}
          <p className="text-gray-500">{item}</p>
        </div>
        <div
          className={points.startsWith('-') ? 'text-red-500' : 'text-green-500'}
        >
          {points}
        </div>
      </div>
    </div>
  )
}

export default PointHistoryCard
