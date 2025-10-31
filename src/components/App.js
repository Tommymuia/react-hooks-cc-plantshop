import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch plants from API
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // Toggle sold-out status
  function handleToggleSoldOut(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  }

  // Filter plants by search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Plantsy 🌿</h1>
      <Search search={search} onSearchChange={setSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={displayedPlants} onToggleSoldOut={handleToggleSoldOut} />
    </div>
  );
}

export default App;
