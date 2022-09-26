import { Component } from "react";

import "./search-input.styles.css";

export default class SearchInput extends Component {
  render() {
    console.log("render SearchInput");
    return (
      <input
        className={`search-box {this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
