import React from "react";
import { IoImageOutline } from "react-icons/io5";

export default function PostForm() {
  const ImageIcon = IoImageOutline as React.ComponentType<{ className?: string }>;
  const handleFileUpload = () => {};

  return (
    <form action="" className="post-form">
      <textarea name="content" id="content" className="post-form__textarea" placeholder="What is happening?"></textarea>
      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <ImageIcon className="post-form__file-icon" />
        </label>
        <input type="file" name="file-input" accept="image/*" onChange={handleFileUpload} className="hidden"/>
        <input type="submit" value="Tweet" className="post-form__submit-btn"/>
      </div>
    </form>
  )
}