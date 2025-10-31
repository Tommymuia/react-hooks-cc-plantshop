import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* ✅ Remove dollar sign */}
      <p>Price: {plant.price}</p>
      <button
        className={plant.soldOut ? "" : "primary"}
        onClick={() => onToggleSoldOut(plant.id)}
      >
        {/* ✅ Change label to match test expectation */}
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
