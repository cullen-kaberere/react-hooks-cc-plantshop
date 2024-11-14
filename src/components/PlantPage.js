import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants,setPlants,newPlant}) {
  
  const [search,setSearch] = React.useState('');
  

  function addPlant(newPlant){
    fetch("https://react-hooks-cc-plantshop-2-nztt.onrender.com/plants",{
      method:"POST",
      headers:{
        'Content-Type':'Application/JSON'
      },
      body : JSON.stringify(newPlant)
    })
    .then((reponse) => reponse.json())
    .then((plant) => setPlants([...plants,plant]));
  }
  return (
    <main>
      <NewPlantForm handleForm={addPlant} />
      <Search handleSearch={setSearch}/>
      <PlantList plants ={plants.filter(plant=>plant.name.toLowerCase().includes(search.toLowerCase()))}/>
    </main>
  );
}

export default PlantPage;