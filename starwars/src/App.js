import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import { Button, FormGroup, Label, Input } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <FormGroup>
        <Label for="exampleSearch"></Label>
        <Input
          type="text"
          name="search"
          className="search-bar"
          placeholder="Search"
        />
        <Button color="warning">Search</Button>{" "}
      </FormGroup>
      <div>
        {characters.map((character, index) => {
          return (
            <CharacterCard
              key={index}
              name={character.name}
              birthYear={character.birth_year}
              gender={character.gender}
              eyecolor={character.eye_color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
