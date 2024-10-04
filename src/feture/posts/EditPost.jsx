import React, { useEffect } from "react";
import { useFormik } from "formik";
 import { useAddNewPostMutation, useLazyGetAllPostListQuery, useUpdatePostMutation } from "../../dom/postlistapi";
import { useLocation, useNavigate } from "react-router-dom";

function EditPost() {
   var [addnewPostFn] = useAddNewPostMutation();
  var [getAllPostFn] = useLazyGetAllPostListQuery();
  var [updatePostFn]=useUpdatePostMutation()
  var {state} = useLocation()
  var navigate = useNavigate();
  var postForm = useFormik({
    initialValues: {
      title: "",
      author: "",
      id:""
    },
    onSubmit: (values) => {
      updatePostFn(postForm.values).then(()=>{
        getAllPostFn();
        navigate("/")
      } )
       
    },
  });
  useEffect(()=>{
    // postForm.setValues(state)
    postForm.setFieldValue("title",state.title)
    postForm.setFieldValue("author",state.author)
    postForm.setFieldValue("id",state.id)
  },[state])
  return (
    <div>
      <h1>Add New Post</h1>
      <div style={{ border: "2px solid", padding: "10px", margin: "10px" }}>
        <form onSubmit={postForm.handleSubmit}>
          <input type="text" {...postForm.getFieldProps("title")} />
          <br />
          <input type="text" {...postForm.getFieldProps("author")} />
          <br />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
export default EditPost;
