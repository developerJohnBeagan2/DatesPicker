import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './CalendarTableCell';

const CalendarTableRow = ({days, selectDate, currentMonthDate}) => {

  return (
    <tr>
      {[0,1,2,3,4,5,6].map( i =>
        <TableCell key={i} day={days[i]} selectDate={selectDate} currentMonthDate={currentMonthDate} />
      )}
    </tr>
  );

};

CalendarTableRow.propTypes = {
  days: PropTypes.array.isRequired,
  selectDate: PropTypes.func.isRequired,
  currentMonthDate: PropTypes.instanceOf(Date)
};

export default CalendarTableRow;

