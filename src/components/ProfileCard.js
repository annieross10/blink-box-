// profiles.js

import React, { useState } from "react";
import axios from "axios";


const ProfileCard  = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [query] = useState("");
  const [filter] = ("");


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/profiles?${filter}search=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching profiles:", error);
    }
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;