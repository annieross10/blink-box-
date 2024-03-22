import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import { Form, InputGroup, Button } from "react-bootstrap";

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
    <div style={{ paddingTop: "20px" }}>
      <Form onSubmit={handleSearchSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ width: "200px" }}
          />
          <InputGroup.Append>
            <Button type="submit" variant="primary" style={{ height: "38px", fontSize: "14px" }}> {/* Apply inline style for button */}
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        searchResults.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      )}
    </div>
  );
};

export default SearchBar;

