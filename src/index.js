import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Postt from "./feture/posts/Postt";
import AddPost from "./feture/posts/posts/AddPost";
import EditPost from "./feture/posts/EditPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
      children: [
        {
          path:"",
          element:<Postt></Postt>
        },
        {
          path:"/addpost",
          element:<AddPost></AddPost>
        },
        {
          path:"editPost",
          element:<EditPost></EditPost>
        }
      ]
    }
  

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

 reportWebVitals();
