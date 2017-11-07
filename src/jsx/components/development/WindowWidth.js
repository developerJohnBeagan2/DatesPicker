import React from 'react';
import PropTypes from 'prop-types';

class WindowWidth extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {windowWidth: 0};

    this.updateDimensions = this.updateDimensions.bind(this);

  } // constructor



componentWillMount() {
    this.updateDimensions();
}

componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
}

componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
}

updateDimensions() {
  this.setState(
    {windowWidth: $('body').outerWidth(true)});
}


  render() {
    return (
      <div className="dvp-ww-font">
        {this.state.windowWidth}
      </div>
    );
  }


}

WindowWidth.propTypes = {
};

export default WindowWidth;


