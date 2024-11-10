import React from "react";

function NewPlantForm({handleForm}) {
  const [newPlant, setNewPlant] = React.useState({});

  //controls the form
  function handleOnChange(event){
    const addedPlant ={...newPlant,[event.target.name]:event.target.value}
    setNewPlant(addedPlant);

    console.log("we've added this plant:", addedPlant);
  }

  function handleOnSubmit (event){
    event.preventDefault();
    handleForm(newPlant);
    setNewPlant({}); //Not reseting the form 

  }
 


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          value={newPlant.name}
          onChange={handleOnChange}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={newPlant.image}
          onChange={handleOnChange}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={newPlant.price}
          onChange={handleOnChange}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;