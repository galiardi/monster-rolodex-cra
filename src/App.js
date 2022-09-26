import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/search-input.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const newSearchString = event.target.value.toLowerCase();
    setSearchString(newSearchString);
  };

  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchInput placeholder="..." onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
