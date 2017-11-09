import React from 'react';
import PropTypes from 'prop-types';
import * as hf from './HelperFunctions';

class CalendarTableCell extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

  } // constructor


  handleClick(e)  {
    const selectDate = this.props.selectDate;
    const day = this.props.day;
    return selectDate(day);
  }


  render() {

    const day = this.props.day;

    const today = new Date();
    let beforeToday = false;

    let buttonText = "";
    if (day > 0) {
      buttonText = day.toString();
      const thisCellDate = hf.calcThisCellDate(this.props.currentMonthDate, day);
      beforeToday = (thisCellDate < today);
    }

    let cellContent = "";

    if(day == 0) {
      cellContent = <span />;
    }
    else if (day > 0 && beforeToday) {
      /*
          disable past dates
      */
      cellContent = (
        <button type="button"
        className="btn btn-link dp-calendar-cell-button disabled dp-disable-link"
        aria-disabled="true">
            {buttonText}</button>
      );
    }
    else {
      cellContent = (
        <button type="button"
        onClick={this.handleClick}
        className="btn btn-link dp-calendar-cell-button">
            {buttonText}</button>
      );
    }

    return (
      <td >
        {cellContent}
      </td>
    );
  }


}

CalendarTableCell.propTypes = {
  day: PropTypes.number.isRequired,
  selectDate: PropTypes.func.isRequired,
  currentMonthDate: PropTypes.instanceOf(Date)
};

export default CalendarTableCell;
