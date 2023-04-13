import React from "react";

export const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`/images/${props.data.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.data.stats.rating}</span>
        <span className="gray">({props.data.stats.reviewCount}) • </span>
        <span className="gray">{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p>
        <span className="bold">From ${props.data.price}</span> / person
      </p>
    </div>
  );
};
