import React from "react";

const Card = ({ name, company }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{company.name}</h6>
        <p className="card-text">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Card;
