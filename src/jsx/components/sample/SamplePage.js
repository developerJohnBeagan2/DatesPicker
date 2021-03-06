﻿/*eslint-disable import/default */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import {withRouter} from 'react-router-dom';
import TextInput from '../common/TextInput';
import * as sampleActions from '../../actions/sampleActions';
import DatesPickerModal from '../controls/datesPicker/DatesPickerModal'; //eslint-disable-line import/no-named-as-default
import SavedDateItem from '../controls/datesPicker/SavedDateItem';
import * as hf from '../controls/datesPicker/HelperFunctions';
import toastr from 'toastr';


export class SamplePage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      formFields: Object.assign({}, props.formFields),
      fieldList: Object.getOwnPropertyNames(props.formFields)
    };

    this.updateFormFieldState = this.updateFormFieldState.bind(this);
    this.showPickDates = this.showPickDates.bind(this);
    this.savePickedDates = this.savePickedDates.bind(this);

  } // end constructor


  // used by onChange to capture user typing
  updateFormFieldState(event) {
    const field = event.target.name;
    let formFields = this.state.formFields;
    formFields[field] = event.target.value;
    return this.setState({formFields: formFields});
  }

  showPickDates(event) {
    $('.dp-dates-pick').modal('show');
  }

  savePickedDates(selectedDates) {
    this.props.actions.saveDatesPicked(selectedDates);
  }


  render() {

    let selectedList = [];

    const selectedDates = this.props.datesPicked;
    selectedDates.forEach(dateObject => {
      let formattedDate = hf.formatDateObject(dateObject);
      selectedList.push(<SavedDateItem key={dateObject.id} formattedDate={formattedDate} />) ;
    });

    // prepare form fields for display:
    let firstTwoFields = [];
    {
      this.state.fieldList.slice(0, 2).forEach( f =>
      firstTwoFields.push(
          <TextInput
            key={f} name= {f} label= {f}
            onChange={this.updateFormFieldState} />
        )
      );
    }

    let lastFiveFields = [];
    {
      this.state.fieldList.slice(2).forEach( f =>
      lastFiveFields.push(
        <TextInput
          key={f} name= {f} label= {f}
          onChange={this.updateFormFieldState} />
        )
      );
    }

    let today = new Date();

    return (
      <div>

        <h1>Form on Sample Page</h1>

        <form>

          <DatesPickerModal savePickedDates={this.savePickedDates} today={today} />

          <br />
          {firstTwoFields}

          <div id="idDatePicker">
              <button type="button" onClick={this.showPickDates}
                className="btn btn-outline-info app-button">
                Pick Future Dates...
              </button>
              <div id="idDatePickerSelection" />
         </div>

        <div>
          <ul className="dp-selected-list" style={{listStyle: 'none'}}>
            {selectedList}
          </ul>
        </div>

          <br />
         {lastFiveFields}

        </form>
      </div>
    );
  } // render

} // class


SamplePage.propTypes = {
  datesPicked: PropTypes.array.isRequired,
  formFields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    // properties to expose on component
    //    like this.prop.courses
    //    state comes from reducer
    //      see index/root reducer for name in state."name"
    //        from name used in imports, then in combineReducers
    //  theses names m/tie to root reducer:
    datesPicked: state.datesPicked,
    formFields: state.formFields
  };
}


function mapDispatchToProps(dispatch) {
  return {
    // wraps each action in a dispatch
    actions: bindActionCreators(sampleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);

