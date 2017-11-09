import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './CalendarTableCell';

//import {Link} from 'react-router-dom';

//const CalendarTableRow = ({days, someFunctionName}) => {
const CalendarTableRow = ({days, selectDate, currentMonthDate}) => {


  let day = 0;
  let tableCells = [];
  for (let i = 0; i <= 6; i++) {
    day = days[i];
    tableCells.push(<TableCell key={i} day={day} selectDate={selectDate} currentMonthDate={currentMonthDate} />);
  }

  return (
    <tr>{tableCells}</tr>
  );

};

CalendarTableRow.propTypes = {
  days: PropTypes.array.isRequired,
  selectDate: PropTypes.func.isRequired,
  currentMonthDate: PropTypes.instanceOf(Date)
};

export default CalendarTableRow;

