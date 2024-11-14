import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const[plants,setPlants] = useState([]);

React.useEffect (()=>{
  fetch('https://react-hooks-cc-plantshop-2-nztt.onrender.com/plants')
  .then((response)=>response.json())
  .then((data)=>{
    console.log('Plants:',data);
    setPlants(data);
  })
   

},[])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}


export default App;