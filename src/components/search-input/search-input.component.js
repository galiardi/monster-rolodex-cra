import "./search-input.styles.css";

const SearchInput = ({ className, placeholder, onChangeHandler }) => {
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />;
};

export default SearchInput;
