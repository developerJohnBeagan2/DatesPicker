import React from 'react';
import PropTypes from 'prop-types';

class CalendarTableCell extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

  } // constructor


  handleClick(e)  {

    let selectDate = this.props.selectDate;
    let day = this.props.day;

    return selectDate(day);
  }


  render() {

    let day = this.props.day;

    let buttonText = "";
    if (day > 0) {
      buttonText = day.toString();
    }

    return (
      <td >
      <button type="button"
        onClick={this.handleClick}
        className="btn btn-link dp-calendar-cell-button">
            {buttonText}</button></td>
    );
  }


}

CalendarTableCell.propTypes = {
  day: PropTypes.number.isRequired,
  selectDate: PropTypes.func.isRequired

};

export default CalendarTableCell;
