import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './CalendarTableCell';

//import {Link} from 'react-router-dom';

const CalendarTableRow = ({days}) => {

  //debugger;


  let day = 0;
  let tableCells = [];
  for (let i = 0; i <= 6; i++) {
    day = days[i];
    tableCells.push(<TableCell key={i} day={day} />);
  }

  return (
    <tr>{tableCells}</tr>
  );

};

CalendarTableRow.propTypes = {
};

export default CalendarTableRow;

