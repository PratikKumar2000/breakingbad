import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Description:</strong> {item.description.substring(0, 500)}
              ...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
