import React from "react";
import Star from "./star";
import { createArray } from "./util";

export default function StarRating({
  totalStars = 5,
  selectedStar = 0,
  onRate = index => index
}) {
  // const [selectedStar, setSelectedStar] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStar}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars}
      </p>
    </>
  );
}
