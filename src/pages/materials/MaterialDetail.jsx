import Navigation from '../../components/Navigation'
import TapBar from '../../components/TapBar'
import SearchBar from '../../components/SearchBar'
import MaterialCard from '../../components/MaterialCard'

export default function MaterialDetail() {
  return (
    <div>
      <div className="p-12 text-4xl font-bold">
        <Navigation></Navigation>
        <div className="w-56 px-4 py-2 text-base font-light text-center text-black border-2 rounded-tl-md rounded-tr-md">
          Material Sourcing
        </div>
        <hr></hr>
        <div></div>
      </div>
    </div>
  )
}
