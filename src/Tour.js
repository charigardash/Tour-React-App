import React from "react";
import { useState } from "react";

function Tour({ id, image, info, name, price, removeInfo }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {readMore ? (
            <button className="btn" onClick={() => setReadMore(false)}>
              Show Less
            </button>
          ) : (
            <button className="btn" onClick={() => setReadMore(true)}>
              Read More
            </button>
          )}
        </p>
        <button className="delete-btn" onClick={() => removeInfo(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
