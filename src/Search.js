import React from "react";
import "./Search.css";
export default function Weather() {
  return (
    <form className="search-form" id="search-form">
      <input
        type="search"
        placeholder="Enter a city..."
        required
        id="search-form-input"
        className="search-form-input"
      />
      <input type="submit" value="Search" className="search-form-button" />
    </form>
  );
}
