import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';

const CalendarTableCell = ({day}) => {
  /*
      button link number
      cell attributes
        background color
        display # yes/no
        link active/inactive
  */

  //debugger;

  let buttonText = "";
  if (day > 0) {
    buttonText = day.toString();
  }

  return (
    <td ><button type="button" className="btn btn-link dp-calendar-cell-button">{buttonText}</button></td>
  );
};

CalendarTableCell.propTypes = {
};

export default CalendarTableCell;

