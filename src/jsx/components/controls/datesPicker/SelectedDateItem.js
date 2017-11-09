import React from 'react';
import PropTypes from 'prop-types';

class SelectedDateItem extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

  } // constructor


  handleClick(e)  {
    const removeDate = this.props.removeDate;
    const selectedDate = this.props.selectedDate;
    return removeDate(selectedDate.id);
  }


  render() {

    const formattedDate = this.props.formattedDate;


    return (
      <li >

          <span className="dp-x">
            {this.props.formattedDate}
          </span>

          <button
            title="Remove this date"
            type="button" aria-label="Remove this date"
            className="btn btn-outline-danger"
            onClick={this.handleClick}
          >
            <i aria-hidden="true" className="fas fa-times"/>
          </button>

      </li>

    );
  }


}

SelectedDateItem.propTypes = {
  formattedDate: PropTypes.string.isRequired,
  selectedDate: PropTypes.object.isRequired,
  removeDate: PropTypes.func.isRequired

};

export default SelectedDateItem;
