import React from "react";
import PropTypes from "prop-types";

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

TechItem.defaultProps = {
  tech: "Oculto",
};

TechItem.propTypes = {
  // tech: PropTypes.string.isRequired,
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
