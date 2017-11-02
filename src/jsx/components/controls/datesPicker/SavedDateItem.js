import React from 'react';
import PropTypes from 'prop-types';

const SavedDateItem = ({formattedDate}) => {

    return (
      <li >
          <span className="dp-saved-date-item">{formattedDate}</span>
      </li>
    );
  };


  SavedDateItem.propTypes = {
  formattedDate: PropTypes.string.isRequired
};

export default SavedDateItem;
