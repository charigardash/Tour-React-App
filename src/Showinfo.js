import React from "react";
import Tour from "./Tour";

function showInfo({ info, removeInfo }) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {info.map((tour) => {
          return <Tour key={tour.id} removeInfo={removeInfo} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default showInfo;
