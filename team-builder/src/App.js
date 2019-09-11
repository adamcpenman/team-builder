import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';


//Components
import Form from './Components/Form'
import data from './Data';
import TeamList from './Components/TeamList';

function App() {
  
  const [team, setTeam] = useState ([data]);
  console.log(data)


  useEffect(() => {
    setTeam(data);
  }, []);



  return (
    <div className="App">

      <Form team={team} setTeam={setTeam}/>
      <TeamList team={team}/>
  
      
    </div>
  );
}

export default App;
