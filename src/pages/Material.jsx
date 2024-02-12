import  Navigation  from "../components/Navigation";
import  TapBar from "../components/TapBar";
import SearchBar from "../components/SearchBar";

const Material = () => {
  return (
    <div>
      
      <div className="p-12">
        <Navigation />
        <TapBar def={'material'}/>
        <SearchBar currentPage={'material'}/>
      
      </div>
    
    </div>
  )
}

export default Material
