// import { useEffect, useState } from "react";
// import { fetchPosts } from "../api";
// import { Link } from "react-router-dom";

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await fetchPosts();
//       setPosts(data);
//     };
//     getPosts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Blog Posts</h1>
//       <ul className="space-y-4">
//         {posts.map((post) => (
//           <li key={post.id} className="border p-4 rounded-lg shadow">
//             <Link to={`/posts/${post.id}`} className="text-blue-500">
//               <h2 className="text-lg font-semibold">{post.title}</h2>
//             </Link>
//             <p>{post.content.slice(0, 100)}...</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostList;
import React from "react";
import styled from "styled-components";

// Sample post data with images
const posts = [
  {
    id: 1,
    title: "Tech Trends in 2025",
    content: "Exploring the latest advancements in technology.",
    imageUrl: "https://example.com/images/tech.jpg", // Image URL
  },
  {
    id: 2,
    title: "How to Stay Healthy",
    content: "Tips and tricks for maintaining a healthy lifestyle.",
    imageUrl: "https://example.com/images/health.jpg", // Image URL
  },
  {
    id: 3,
    title: "Work-Life Balance",
    content: "Strategies for managing work and personal life.",
    imageUrl: "https://example.com/images/lifestyle.jpg", // Image URL
  },
];

// Styled Components for Post
const PostContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 300px;
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
`;

const PostList = ({ searchQuery, filter }) => {
  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === "All" || post.title.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {filteredPosts.map((post) => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          {post.imageUrl && <PostImage src={post.imageUrl} alt="Post" />}
        </PostContainer>
      ))}
    </div>
  );
};

export default PostList;
