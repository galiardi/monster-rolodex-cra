import { Component } from "react";

import "./card-list.styles.css";

export default class CardList extends Component {
  render() {
    console.log(this.props, "render CardList");
    const { monsters } = this.props;
    return (
      <div className={`card-list ${this.props.className}`}>
        {monsters.map((monster, i) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${i}?set=set1&size=180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
