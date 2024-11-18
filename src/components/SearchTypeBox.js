import React, { useState } from 'react';

const SearchTypeBox = ({ onTypeChange }) => {
  const [selectedType, setSelectedType] = useState('movie');

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    onTypeChange(newType); // Appelle la fonction pour notifier le changement de type
  };

  return (
    <div className="mb-4">
      <label htmlFor="content-type" className="mr-2">Type de contenu :</label>
      <select
        id="content-type"
        value={selectedType}
        onChange={handleTypeChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="movie">Films</option>
        <option value="series">Séries</option>
        <option value="episode">Épisodes</option>
        
      </select>
    </div>
  );
};

export default SearchTypeBox;
