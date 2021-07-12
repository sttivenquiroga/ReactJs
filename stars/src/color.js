import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./starRating";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (id) => id,
  onRate = (params) => params,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStar={rating}
        onRate={(rating) => {
          onRate(id, rating);
        }}
      />
    </section>
  );
}
