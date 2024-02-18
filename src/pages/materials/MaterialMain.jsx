import Navigation from '../../components/Navigation'
import TabBar from '../../components/TabBar'
import SearchBar from '../../components/SearchBar'
import MaterialCard from './MaterialCard'

export default function MaterialMain() {
  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation />
        <TabBar def={'material'} />
        <SearchBar currentPage={'material'} />
        <MaterialCard></MaterialCard>
      </div>
    </div>
  )
}
