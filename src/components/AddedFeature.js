import React from "react";
import { removeItem } from "../actions/index";
import { connect, useDispatch } from "react-redux";

const AddedFeature = (props) => {
  const dispatch = useDispatch();
  console.log("hei", props);
  const removeFeature = (item) => {
    // props.removeItem(item);
    dispatch({ type: removeFeature, payload: item });
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeItem } // same as { toggleEditing: toggleEditing }
)(AddedFeature); // function currying
