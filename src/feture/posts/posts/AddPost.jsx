    import React from 'react'
    import { useFormik } from 'formik'
    import { useAddNewPostMutation,useLazyGetAllPostListQuery } from '../../../dom/postlistapi';
import { useNavigate } from 'react-router-dom';

    function AddPost() {
    var [addnewPostFn] = useAddNewPostMutation();
    var [getAllPostFn] = useLazyGetAllPostListQuery();
        var navigate=useNavigate()
        var postForm=useFormik({
            initialValues:{
              title:"",
              author:"" 
            },
            onSubmit:(values)=>{
              addnewPostFn (values)
              .then((res)=>{
                getAllPostFn()
                navigate("/")
                // getAllPostFn()
        
              })
            }
     })
      return (
     <div>
        <h1>Add New Post</h1>
        <div style={{border:"2px solid" ,padding:"10px",margin:"10px"}}>

                <form onSubmit={postForm.handleSubmit}>
                <input type="text" {...postForm.getFieldProps("title")} />
                <br />
                <input type="text" {...postForm.getFieldProps("author")}/>
                <br />
                <button>Add Post</button>
                </form>
                </div> 
        </div> 
          
      )
    }
    
    export default AddPost