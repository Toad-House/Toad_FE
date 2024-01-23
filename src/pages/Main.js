import {Link} from 'react-router-dom'
import Navigation from "../components/Navigation";
import MaterialCard from "../components/MaterialCard";
import MaterialRequestModal from "../components/MaterialRequestModal";


const Main = () => {
  return (
    <>
    <div className="p-12 font-bold text-4xl">
      <Navigation></Navigation>
      <MaterialRequestModal></MaterialRequestModal>
    </div>
    
      
    </> 
  );
}

export default Main;
