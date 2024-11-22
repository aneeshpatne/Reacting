import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';


function App() {
  const navigate = useNavigate();
  return (<div>
    <div>Hello World</div>
    <Routes>
      <Route path ='/' element ={<div>Home</div>}/>
      <Route path ='/project' element ={<div>Project</div>}/>
    </Routes>
    <button onClick={()=>navigate('/project')}>Navigate</button>
  </div>
  );
}

export default App;
