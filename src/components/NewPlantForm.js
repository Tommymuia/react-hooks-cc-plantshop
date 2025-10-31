import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = { name, image, price }; // ✅ keep price as string

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        // ✅ Capitalize to match test expectation
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddPlant(data);
        setName("");
        setImage("");
        setPrice("");
      });
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
