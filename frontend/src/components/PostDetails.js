import React from "react";
import styled from "styled-components";

// Sample post data with images and likes
const posts = [
  {
    id: 1,
    title: "Tech Trends in 2025",
    content: "Exploring the latest advancements in technology.",
    imageUrl: "https://example.com/images/tech.jpg", // Image URL
    likes: 120,
  },
  {
    id: 2,
    title: "How to Stay Healthy",
    content: "Tips and tricks for maintaining a healthy lifestyle.",
    imageUrl: "https://example.com/images/health.jpg", // Image URL
    likes: 80,
  },
  {
    id: 3,
    title: "Work-Life Balance",
    content: "Strategies for managing work and personal life.",
    imageUrl: "https://example.com/images/lifestyle.jpg", // Image URL
    likes: 150,
  },
];

// Styled Components for Post
const PostContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const LikeButton = styled.button`
  background-color: #ff5722;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e64a19;
  }
`;

const LikeCount = styled.span`
  font-size: 1.2rem;
  color: #333;
  margin-left: 8px;
`;

const PostList = ({ searchQuery, filter }) => {
  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === "All" || post.title.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  const handleLike = (id) => {
    // Here you could update the state or send a request to the server to update the like count
    alert(`Post ${id} liked!`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {filteredPosts.map((post) => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          {post.imageUrl && (
            <PostImage
              src={post.imageUrl}
              alt={post.title}
              loading="lazy" // Lazy load images
            />
          )}
          <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            <LikeButton onClick={() => handleLike(post.id)}>Like</LikeButton>
            <LikeCount>{post.likes}</LikeCount>
          </div>
        </PostContainer>
      ))}
    </div>
  );
};

export default PostList;
