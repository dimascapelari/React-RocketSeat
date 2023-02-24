import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        x
      </button>
    </li>
  );
}

export default TechItem;
