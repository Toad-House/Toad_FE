import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import SearchBar from '../../components/SearchBar'
import MaterialCard from './MaterialCard'
import React, { useState, useEffect } from 'react'
import { GetAllMaterialsApi } from '../../apis/materials'

export default function MaterialMain() {
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllMaterialsApi()
        setMaterials(response)
        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation />
        <TabBar def={'material'} />
        <SearchBar currentPage={'material'} />
        <MaterialCard materials={materials}></MaterialCard>
      </div>
    </div>
  )
}
