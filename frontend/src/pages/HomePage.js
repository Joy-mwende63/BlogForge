import React, { useState } from "react";
import PostList from "../components/PostList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000; /* Black background */
  height: 100vh;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add text shadow for contrast */
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #f0a500; /* Golden color */
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 12px;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 2px solid #ff7f50; /* Coral color border */
  margin-bottom: 20px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2); /* Slight transparent background */
  color: #fff;

  &:focus {
    border-color: #ff6347; /* Tomato red on focus */
  }
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const FilterButton = styled.button`
  background-color: #ff6347; /* Tomato red */
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  padding: 12px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff4500; /* Orange red on hover */
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3); /* Shadow effect */
  }

  &:active {
    background-color: #d23600; /* Darker red when pressed */
    transform: scale(1);
  }
`;

const PostCard = styled.div`
  background-color: #222; /* Dark grey background for post card */
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  width: 80%;
  max-width: 600px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #333;
    transform: scale(1.03);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3); /* Hover shadow effect */
  }
`;

const PostTitle = styled.h2`
  font-size: 1.8rem;
  color: #ff7f50; /* Coral color for title */
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 1.1rem;
  color: #ddd; /* Light grey content color */
  line-height: 1.6;
`;

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <HomeContainer>
      <Header>Welcome to BlogForge</Header>

      <SearchBar
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <FilterSection>
        <FilterButton onClick={() => handleFilter("All")}>All</FilterButton>
        <FilterButton onClick={() => handleFilter("Technology")}>Technology</FilterButton>
        <FilterButton onClick={() => handleFilter("Health")}>Health</FilterButton>
        <FilterButton onClick={() => handleFilter("Lifestyle")}>Lifestyle</FilterButton>
      </FilterSection>

      <PostList searchQuery={searchQuery} filter={filter} />

      {/* Example of a Post Card */}
      <PostCard>
        <PostTitle>Exciting News in Tech!</PostTitle>
        <PostContent>
          Discover the latest advancements in technology that will change the world!
        </PostContent>
      </PostCard>
    </HomeContainer>
  );
}

export default HomePage;
