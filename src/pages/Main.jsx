import Navigation from '../components/Navigation'
import MaterialRequestModal from '../components/MaterialRequestModal'
import TapBar from '../components/TapBar'
import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <>
      <div className="p-12 font-bold text-4xl">
        <Navigation />
        <TapBar />
        <SearchBar />
        <MaterialRequestModal></MaterialRequestModal>
        
      </div>
    </>
  )
}

export default Main
