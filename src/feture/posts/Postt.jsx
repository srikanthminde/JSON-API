import React from 'react';
import { useDeletePostMutation, useGetAllPostListQuery,useLazyGetAllPostListQuery, useUpdatePostMutation} from '../../dom/postlistapi'
import { useNavigate } from 'react-router-dom';
function Postt() {
    var { isLoading,data}= useGetAllPostListQuery()
    var [getAllPostFn]=useLazyGetAllPostListQuery()
    var [deletPostFn] = useDeletePostMutation();
    // var [updatePostFn]=useUpdatePostMutation()
    var navigateFn=  useNavigate()

        function deletPostById(id){
            deletPostFn(id).then((id)=>{
                getAllPostFn()
            })  
        }
          var {isLoading,data} = useGetAllPostListQuery();
           return (
           
            <div style={{border:"2px solid" ,padding:"10px",margin:"10px"}}>
              <h1>Post  <button className='btn btn-success' onClick={()=>{navigateFn("/addPost")}}>Add New Post</button></h1>
              
            {
               <ul>
                 {
                 isLoading===false && data?.map((c)=>{
                  // console.log(c)
                     return <li> {c.title}
                     <button className='btn btn-warning btn m-2' onClick={()=>{navigateFn("/editPost",{state:c})}}>Edit</button>
                     <button className='btn btn-danger btn m-2' onClick={()=>{deletPostById(c.id)}}>Delete</button></li>
                 })
                }
              </ul>
             }
           </div>
          )
         }
         export default Postt

