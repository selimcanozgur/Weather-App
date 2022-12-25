import {useContext} from "react";
import CityContext from "../context/CityContext";
import cityData from "../data/cityData.json";

function Header() {

  const {city,setCity} = useContext(CityContext);

  const handleChange = (e) => {
    setCity (e.target.value);
  }
  return (
    <div>
   <div className="container  mt-3"> 
   <div className="row"> 
   <div className="col-2"></div>
   <div className="col-4 mt-3 mb-3">
      <select className="form-select" aria-label="Default select example" 
      value={city} onChange={handleChange}> 
      {
        cityData.map((cityItem) => <option key={cityItem.id}>
          {cityItem.name}
        </option>)
      }
      </select>
      </div>
      <div className="col-4 mt-3 mb-3">
       <h2 className="twtTitle"> <i className="fa-solid fa-cloud-bolt"></i> Turkey Weather App</h2>
      </div>
      
      </div>
      </div>s
    </div>
  )
}

export default Header