import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchInput from "./components/search-input/search-input.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(
              "callback after setState after fetch in componentDidMount"
            );
          }
        );
      });
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  };

  render() {
    console.log("render App");
    const { onSearchChange } = this;
    const { monsters, searchString } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <>
        <main>
          <SearchInput placeholder="..." onChangeHandler={onSearchChange} />
          <CardList monsters={filteredMonsters} />
        </main>
      </>
    );
  }
}
