import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/search-input.component";

import "./App.css";

const App = () => {
  console.log("render App");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [string, setString] = useState("");

  useEffect(() => {
    console.log("fetching");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      console.log("filtering monster");
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const newSearchString = event.target.value.toLowerCase();
    setSearchString(newSearchString);
  };

  const onStringChange = (event) => {
    const newString = event.target.value;
    setString(newString);
  };

  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchInput placeholder="..." onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
      <SearchInput
        value={string}
        placeholder="..."
        onChangeHandler={onStringChange}
      />
    </div>
  );
};

export default App;
