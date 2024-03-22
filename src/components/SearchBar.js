import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`/profiles/?search=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching profiles:", error);
    }
    setLoading(false);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 ? (
        searchResults.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default SearchBar;
