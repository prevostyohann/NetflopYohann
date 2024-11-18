import React from 'react';
import { Link } from 'react-router-dom';

function ButtonClient({chemin , NomButton , setIsLoggedIn}) {
    
    const handleclick = () => {
        setIsLoggedIn(false);
    }
  return (
    <Link to = {chemin}>
      <button onClick = {handleclick}  type="button" className = "px-2 py-2 bg-red-500 text-white rounded">
        {NomButton}
      </button>
    </Link>
  );
}

export default ButtonClient;