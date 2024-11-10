import React from "react";

function Search({handleSearch}) {

const [search,setSearch] = React.useState('');

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(event) => {
          setSearch(event.target.value)
          handleSearch(event.target.value)
        }}
      />
    </div>
  );
}

export default Search;