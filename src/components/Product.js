// Code Product Component Here

<<<<<<< HEAD
import React,{ Component } from 'react' // We need to import react so we can make use of its .component class
import PropTypes from 'prop-types'; // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

class Product   extends Component {
  render(){
    return(
      <div>
        Product
=======
import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

export class Product   extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>this.props.name</li>
          <li>this.props.producer</li>
          <li>this.props.hasWatermark</li>
          <li>this.props.color</li>
          <li>this.props.weight</li>
        </ul>
>>>>>>> 9e72720d6c05df3c0371ab5774f2605ec568ba17
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
<<<<<<< HEAD
  weight:(props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
}
export default Product;
=======
  weight: withinRange.isRequired
};

function withinRange(props, propName, componentName) {
  componentName = comopnentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value >= 80  && value <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 80 to 300");
    }
  }
  return null;
}
>>>>>>> 9e72720d6c05df3c0371ab5774f2605ec568ba17
