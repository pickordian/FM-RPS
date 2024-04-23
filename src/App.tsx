import {  useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Rules from './components/Rules/Rules';
import './App.css'
import Games from './components/Games/Games';


function App() {
  const [rule, setRule] = useState<boolean>(false);
  const [score, setScore] = useState<number>(parseInt(localStorage.getItem('score') || '') || 0);
  useEffect(()=>{
    localStorage.setItem('score', score.toString());
  },[score])
  return (
    <>
     <Header score={score}/>
     <Games setScore={setScore}/>
     {rule && <Rules ruleToggle={setRule}/>}
     <button type="button" title='Click to open rule panel' className='rule-btn' onClick={() => setRule((prev) => !prev)}>Rules</button>
    </>
  )
}

export default App
