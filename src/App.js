import { Outlet } from 'react-router-dom';
import './App.css';
import Postt from './feture/posts/Postt';
function App() {
  return (
    <div style={{border:"2px solid",padding:"20px",margin:"20px"}}>
      <h1>PostList</h1>
        {/* <Postlist></Postlist>  */}
       {/* <Postt></Postt>   */}
       <Outlet></Outlet> 
 </div>
  );
}

export default App;
