import Navigation from '../components/Navigation'
import MaterialRequestModal from '../components/MaterialRequestModal'
import TabBar from '../components/TabBar'
import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <>
      <div className="p-12 font-bold text-4xl">
        <Navigation />
        <TabBar />
        <SearchBar />
        <MaterialRequestModal></MaterialRequestModal>
        
      </div>
    </>
  )
}

export default Main
