import React from 'react';
import { Link } from 'react-router-dom';

function ButtonClient({chemin , NomButton}) {
  return (
    <Link to = {chemin}>
      <button type="button" className = "px-2 py-2 bg-green-500 text-white rounded">
        {NomButton}
      </button>
    </Link>
  );
}

export default ButtonClient;