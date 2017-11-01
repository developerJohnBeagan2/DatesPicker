import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './CalendarTableRow';
import * as hf from './HelperFunctions';


class DatesPickerModal extends React.Component {

  constructor(props, context) {

        super(props, context);

        this.state = {
          calendarArray: [],
          currentDate: new Date(),
          monthName: ""
        };

        this.saveDates = this.saveDates.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);

  } // constructor


  componentWillMount() {
    let currentDate = hf.calcFirstDateofMonth(new Date());
    this.setState({
      currentDate: currentDate,
      calendarArray: hf.makeDateArray(currentDate),
      monthName: hf.getMonthName(currentDate)
    });
  }


  saveDates(event) {
    $('.dp-dates-pick').modal('hide');
  }

  previousMonth(event) {
    let currentDate = this.state.currentDate;
    let newDate = hf.calcFirstDateofMonth(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this.setState({
      currentDate: newDate,
      calendarArray: hf.makeDateArray(newDate),
      monthName: hf.getMonthName(newDate)
    });
  }

  nextMonth(event) {
    let currentDate = this.state.currentDate;
    let newDate = hf.calcFirstDateofMonth(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this.setState({
      currentDate: newDate,
      calendarArray: hf.makeDateArray(newDate),
      monthName: hf.getMonthName(newDate)
    });
  }

  render() {

    let tableRows = [];
    let days = [];
    for (let i = 0; i <= 4; i++) {
      if (i != 4) {
        days = this.state.calendarArray.slice(i * 7, (i * 7) + 7);
      }
      else {
        days = this.state.calendarArray.slice(28);
      }
      //debugger;
      tableRows.push(<TableRow key={i} days={days} />);
    }

    return (
      <div className="modal fade dp-dates-pick"
        tabIndex="-1" role="dialog" aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title text-info" >Pick Dates</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">


            <div className="dp-select-month">

              <table className="table dp-select-month-table">
                <tbody>
                  <tr>
                    <td>
                        <button
                          type="button" aria-label="Left month"
                          className="btn dp-previous-month dp-icon-size"
                          onClick={this.previousMonth}
                        >
                          <i aria-hidden="true" className="far fa-angle-left" />
                        </button>
                    </td>
                    <td>
                      <span className="dp-month-name">{this.state.monthName}</span>
                    </td>
                    <td>
                      <span className="dp-year text-muted">{this.state.currentDate.getFullYear().toString()}</span>
                    </td>
                    <td>
                      <button
                        type="button" aria-label="Right month"
                        className="btn dp-next-month dp-icon-size"
                        onClick={this.nextMonth}
                      >
                        <i aria-hidden="true" className="far fa-angle-right"/>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

              <table className="table table-bordered dp-calendar-table">
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows}
                </tbody>
              </table>




            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.saveDates}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DatesPickerModal.propTypes = {
  //children: PropTypes.node
};



export default DatesPickerModal;
