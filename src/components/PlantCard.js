import React from "react";

function PlantCard({plant}) {

  const [inStock,setInStock] = React.useState(true);

  const image = plant.image
  const name = plant.name
  const price = plant.price
  
  function handleStockToggle(){
    setInStock((previousStock) => !previousStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button 
        className="primary"
        onClick={handleStockToggle}
        >In Stock</button>
      ) : (
        <button
        onClick={handleStockToggle}
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;