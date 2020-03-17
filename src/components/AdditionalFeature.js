import React from 'react';
import { addItem } from '../actions/index';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const buyFeature = item => {
    props.addItem(item);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addItem })(AdditionalFeature);
