/*
    problem passing params to callback function in jsx render
*/
import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';

const CalendarTableCell = ({day, selectDate}) => {
  /*
      button link number
      cell attributes
        background color
        display # yes/no
        link active/inactive
  */



  let handleClick = () => {
    this.selectDate(this.day);
  }

  return (
    <td >
      <button type="button"
        onClick={handleClick}
        className="btn btn-link dp-calendar-cell-button">
            {buttonText}</button></td>
  );
};

CalendarTableCell.propTypes = {
  day: PropTypes.number.isRequired,
  selectDate: PropTypes.func.isRequired
};

export default CalendarTableCell;

