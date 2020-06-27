import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const LargeHeader = styled.h1`
    color: #33FF33;
    font-size: 64px;
    margin: 30px;
    font-weight: bold;


`;

const BackgroundDiv = styled.div` 
  background-color: black;

  `;

  const [characterData, setCharacterData] = useState([]);

  useEffect( () => {

    axios
    .get("https://swapi.dev/api/people/")
    .then(res => {

      console.log(res.data.results);
      setCharacterData(res.data.results);
    })
    .catch(err => {
      console.log("err", err);
    });



  }, []);



  return (
    <BackgroundDiv>
    <div className="App">
      <LargeHeader className="Header">Star Wars</LargeHeader>
      {characterData.map(thisChar => (
          console.log("mapData", thisChar),
           <Character charData = {thisChar} /> 

        ))}
    </div>
    </BackgroundDiv>
  );
}

export default App;
