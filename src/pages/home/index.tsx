import React from "react";
import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";
import { PostProps } from "types/post";

const posts: PostProps [] =  [
  {
    id: "1",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "2",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "3",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "4",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "5",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "6",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  },
  {
    id: "7",
    content: "Hello, world!",
    email: "test@test.com",
    createdAt: "2025-11-19",
    uid: "123123",
  }
]

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For you</div>
        <div className="home__tab">Following</div>
      </div>

      <PostForm />

      {/* Tweet posts */}
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}