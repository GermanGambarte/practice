import { useState } from "react";
import { Tour } from "../../types";
import "./card.css";

type Props = {
  tour: Tour;
  handleClick: (id: string) => void;
};

export const Card = ({ tour, handleClick }: Props) => {
  const [expandText, setExpandText] = useState(false);
  const { name, price, image, info, id } = tour;
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <div className="card-content__wrapper">
        <header className="card-header">
          <h2 className="card-title">{name}</h2>
          <span className="card-price">${price}</span>
        </header>
        {expandText ? (
          <p>
            {`${info} `}
            <button className="read-btn" onClick={() => setExpandText(false)}>
              Read Less
            </button>
          </p>
        ) : (
          <p>
            {`${info.slice(0, 200)}...`}
            <button className="read-btn" onClick={() => setExpandText(true)}>
              Read More
            </button>
          </p>
        )}

        <button className="card-btn" onClick={() => handleClick(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
};
