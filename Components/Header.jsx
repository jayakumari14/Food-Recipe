import React from "react";
import "./Header.css";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="recipe_header py-6 ">
      <h1 className="display-1">
        <i className="material-icons food-icon">fastfood</i>Food Recipe
      </h1>
      <div class="input-group w-50 mx-auto m-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search your Recipe"
          value={search}
          onChange={onInputChange}
          // aria-label="Recipient's username"
          // aria-describedby="basic-addon2"
        />
        <button className="btn btn-dark" onClick={onSearchClick}>
          Search Recipe
        </button>
      </div>
    </div>
  );
};
export default Header;
