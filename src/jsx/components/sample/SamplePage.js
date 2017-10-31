import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import TextInput from '../common/TextInput';
import * as sampleActions from '../../actions/sampleActions';
import DatesPickerModal from '../controls/datesPicker/DatesPickerModal';
import toastr from 'toastr';
//
class SamplePage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      datesPicked: Object.assign({}, props.datesPicked),
      formFields: Object.assign({}, props.formFields),
      fieldList: Object.getOwnPropertyNames(props.formFields)
    };

    this.updateFormFieldState = this.updateFormFieldState.bind(this);
    this.showPickDates = this.showPickDates.bind(this);

  } // constructor


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

  render() {

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

    return (
      <div>
        <h1>Form on Sample Page</h1>

        <form>

          <DatesPickerModal />

          <br />
          {firstTwoFields}

          <div id="idDatePicker">
              <button type="button" onClick={this.showPickDates}
                className="btn btn-outline-info app-button">
                Pick Dates...
              </button>
              <div id="idDatePickerSelection" />
         </div>

         <br />
         {lastFiveFields}

        </form>
      </div>
    );
  } // render

} // class


SamplePage.propTypes = {
  datesPicked: PropTypes.object.isRequired,
  formFields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    // properties to expose on component
    //    like this.prop.courses
    //    state.courses comes from reducer
    //      see index/root reducer for name "courses"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SamplePage));


/*

         <br />
         {lastFiveFields}

*/
