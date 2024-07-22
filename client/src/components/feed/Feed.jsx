import React, { useState, useEffect } from "react";
import TweetBox from "../tweetbox/TweetBox";
import "./feed.css";
import Post from "../post/Post";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h1>Home</h1>
      </div>
      <TweetBox />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Post
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;
