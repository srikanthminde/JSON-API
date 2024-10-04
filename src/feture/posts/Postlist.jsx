import React from "react";

const PostList = () => {
  
  return (
    <div style={{border:"2px solid"}}>
      <h1>hi</h1>
      <form>
        <label htmlFor="title"> Title </label>
        <input text="text" name="title" />
        <br></br>
        <label htmlFor="author"> Author </label>
        <input text="text" name="author" />
        <br></br>
        <button type="submit">Add post</button>
      </form>
    </div>
  );
};

export default PostList;

