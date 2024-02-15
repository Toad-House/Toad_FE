import Navigation from '../../components/Navigation'
import TapBar from '../../components/TapBar'
import SearchBar from '../../components/SearchBar'
import MaterialCard from '../../components/MaterialCard'

export default function MaterialMain() {
  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation />
        <TapBar def={'material'} />
        <SearchBar currentPage={'material'} />
        <MaterialCard></MaterialCard>
      </div>
    </div>
  )
}
