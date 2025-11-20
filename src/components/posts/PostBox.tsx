import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PostProps } from "types/post";

interface PostBoxProps {
  post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
  const UserIcon = FaCircleUser as React.ComponentType<{ className?: string }>;
  const HeartIcon = FaHeart as React.ComponentType<{ className?: string }>;
  const CommentIcon = FaComment as React.ComponentType<{ className?: string }>;
  const handleDelete = () => {};

  return (
    <div className="post__box">
      <Link to={`/posts/${post?.id}`}>
        <div className="post__box-proflie">
          <div className="post__flex">
            {post?.profileUrl ? (<img src={post.profileUrl} className="post__box-profile-img" alt="profile" />) : <UserIcon className="post__box-profile-icon"/>}
            <div className="post__email">{post?.email}</div>
            <div className="post__createdAt">{post?.createdAt}</div>
          </div>
          <div className="post__box-content">{post?.content}</div>
        </div>
      </Link>

      <div className="post__box-footer">
        {/* {post.uid === user.uid 일 때} */}
        <>
        <button type="button" className="post__delete" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" className="post__edit">
          <Link to={`/posts/edit/${post?.id}`}>Edit</Link>
        </button>
        <button type="button" className="post__likes">
          <HeartIcon />
          {post?.likeCount || 0}
        </button>
        <button type="button" className="post__comments">
          <CommentIcon className="post__comments-icon" />
          {post?.comments?.length || 0}
          
        </button>
        </>
      </div>
    </div>
  )
}
