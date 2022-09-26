import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

export default class CardList extends Component {
  render() {
    console.log(this.props, "render CardList");
    const { monsters } = this.props;

    return (
      <div className={`card-list ${this.props.className}`}>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
