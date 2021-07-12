import React from "react";
import Color from "./color";

export default function ColorList(
  { colors = [], onRemoveColor = (id) => id },
  onRateColor = (params) => params
) {
  if (!colors.length) return <div>No hay colors</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
