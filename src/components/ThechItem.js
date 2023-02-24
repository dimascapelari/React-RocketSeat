import React from "react";

// function TechItem(props) {
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {/* {props.tech} */}
      {tech}
      {/* <button type="button" onClick={props.onDelete}> */}
      <button type="button" onClick={onDelete}>
        x
      </button>
    </li>
  );
}

export default TechItem;
