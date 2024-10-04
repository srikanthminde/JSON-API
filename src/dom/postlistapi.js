import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postlistApi = createApi({
  reducerPath:"postlistApi",
  baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/posts"}),
  endpoints:(builder)=>({
    getAllPostList:builder.query({
      query:()=>`/`,
    }),
    addNewPost:builder.mutation({
      query:(newpost)=>{
        return{
          url:"/",
          method:"POST",
          body:newpost
        }
      }
    }),
   deletePost:builder.mutation({
    query:(id)=>{
      return{
        url:`${id}`,
        method:"DELETE",
      }
    }
   }) ,
   updatePost:builder.mutation({
    query:(uPost)=>{
      return{
        url:`/${uPost.id}`,
        method:"PUT",
        body:uPost
      }
    }
   })
  })
})
export const {useGetAllPostListQuery,useAddNewPostMutation,useLazyGetAllPostListQuery,useDeletePostMutation,useUpdatePostMutation}=postlistApi