import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className='col col-sm-4 mt-1 ml-5'>
      <input
        className='form-control border-4 border-black'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Type to search...'
      ></input>
    </div>
  );
};

export default SearchBox;

