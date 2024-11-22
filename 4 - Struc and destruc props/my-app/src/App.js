import logo from './logo.svg';
import './App.css';
import HeaderComponenet from './components/header';
import Logger from './components/logger';
import { useEffect, useState } from 'react';

function App() {
  //theme Changer
  const [curtheme, ThemeSetter] = useState(()=>{
    //remembers prev choice
    return localStorage.getItem('theme') ==='dark-mode';
  })
useEffect(()=>{
  if(curtheme){
    document.body.classList.add('light');
    localStorage.setItem('theme','light-mode');
  }
  else{
    document.body.classList.remove('light');
    localStorage.setItem('theme','dark-mode')
  }

},[curtheme])

const f2 = ()=>{
  ThemeSetter((prev)=> !prev);
};



  const [count, setCount] = useState(0);
  const f1 = () =>{
    setCount(count +1);
  }
  return (
    <div>
    <HeaderComponenet c1 = {count}/>
    <button onClick={f1}>Click Me</button>
    <Logger count = {count}/>
    <button onClick={f2}></button>
    </div>
  );
}

export default App;
