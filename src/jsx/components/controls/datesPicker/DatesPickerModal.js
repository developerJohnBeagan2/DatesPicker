import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TableRow from './CalendarTableRow';
import SelectedDateItem from './SelectedDateItem';
import * as hf from './HelperFunctions';
//
import WindowWidth from '../../development/WindowWidth';
//


class DatesPickerModal extends React.Component {

  constructor(props, context) {

        super(props, context);

        this.state = {
          calendarArray: [],
          currentDate: new Date(),
          monthName: "",
          selectedDates: [],
          calendarMaxWidth: 0,
          calendarSize: "",
          daysofWeek: [],
          tableCssClass: "table table-bordered dp-calendar-table"
        };

        this.saveDates = this.saveDates.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.removeDate = this.removeDate.bind(this);
        this.getWindowWidth = this.getWindowWidth.bind(this);
        this.windowResize = this.windowResize.bind(this);

  } // constructor


  componentWillMount() {
    const currentDate = hf.calcFirstDateofMonth(new Date());
    let calendarMaxWidth = 433;
    let calendarSize = "large";
    let tabelCssClass = "table table-bordered dp-calendar-table";
    if( this.getWindowWidth() <= calendarMaxWidth) {
      calendarSize = "small";
      tabelCssClass = "dp-calendar-table";
    }
    this.setState({
      currentDate: currentDate,
      calendarArray: hf.makeDateArray(currentDate),
      monthName: hf.getMonthName(currentDate, calendarSize),
      daysofWeek: hf.getDayNames(calendarSize),
      calendarMaxWidth: calendarMaxWidth,
      calendarSize: calendarSize,
      tabelCssClass: tabelCssClass
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
  }

  getWindowWidth() {
    return $('body').outerWidth(true);
  }

  windowResize() {
    /*
        ### to remove jQuery, try turning calendar table into component.
            and see if toggle small/large class works
    */
    let width = this.getWindowWidth();
    if( width <= this.state.calendarMaxWidth
        && this.state.calendarSize != "small" ) {
          this.setState({
            calendarSize: "small",
            monthName: hf.getMonthName(this.state.currentDate, "small"),
            daysofWeek: hf.getDayNames("small"),
            tabelCssClass: "dp-calendar-table"
          });
          $("#dpCalendarTable").removeClass().addClass("dp-calendar-table");
        }
    if( width > this.state.calendarMaxWidth
        && this.state.calendarSize != "large" ) {
          this.setState({
            calendarSize: "large",
            monthName: hf.getMonthName(this.state.currentDate, "large"),
            daysofWeek: hf.getDayNames("large"),
            tabelCssClass: "table table-bordered dp-calendar-table"
          });
          $("#dpCalendarTable").removeClass().addClass("table table-bordered dp-calendar-table");
        }
  }

  selectDate(dayNum) {
    // add to selectedDates array in state
    const currentDate = this.state.currentDate;
    let selectedDate = hf.makeSelectedDateObject(currentDate, dayNum);
    this.setState((prevState) => {
      let newList = [...prevState.selectedDates, selectedDate];
      newList.sort( (first, second) => {
          return (first.id - second.id);
        });
      return {selectedDates: newList};
    });
  }

  removeDate(dateObjectId) {
    this.setState( (prevState) => {
      let modifiedList = [...prevState.selectedDates.filter(d => d.id !== dateObjectId)];
      return {selectedDates: modifiedList };
    });
  }

  saveDates(event) {
    $('.dp-dates-pick').modal('hide');
    this.props.savePickedDates(this.state.selectedDates);
  }

  previousMonth(event) {
    const currentDate = this.state.currentDate;
    let newDate = hf.calcFirstDateofMonth(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this.setState({
      currentDate: newDate,
      calendarArray: hf.makeDateArray(newDate),
      monthName: hf.getMonthName(newDate)
    });
  }

  nextMonth(event) {
    const currentDate = this.state.currentDate;
    let newDate = hf.calcFirstDateofMonth(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this.setState({
      currentDate: newDate,
      calendarArray: hf.makeDateArray(newDate),
      monthName: hf.getMonthName(newDate)
    });
  }


  render() {

    let tableCssClass = this.state.tableCssClass;

    let tableRows = [];
    let days = [];
    for (let i = 0; i <= 4; i++) {
      if (i != 4) {
        days = this.state.calendarArray.slice(i * 7, (i * 7) + 7);
      }
      else {
        days = this.state.calendarArray.slice(28);
      }
      tableRows.push(<TableRow key={i} days={days} selectDate={this.selectDate} />);
    } // end for

    let selectedList = [];
    const selectedDates = this.state.selectedDates;
    selectedDates.forEach(dateObject => {
      let formattedDate = hf.formatDateObject(dateObject);
      selectedList.push(<SelectedDateItem
        key={dateObject.id}
        formattedDate={formattedDate}
        selectedDate={dateObject}
        removeDate={this.removeDate} />);
    });

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
                          title="Previous month"
                          type="button" aria-label="Previous month"
                          className="btn btn-outline-secondary dp-previous-month dp-icon-size"
                          onClick={this.previousMonth}
                        >
                          <i aria-hidden="true" className="fal fa-chevron-left" />
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
                        title="Next month"
                        type="button" aria-label="Next month"
                        className="btn btn-outline-secondary dp-next-month dp-icon-size"
                        onClick={this.nextMonth}
                      >
                        <i aria-hidden="true" className="fal fa-chevron-right"/>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

              <table id="dpCalendarTable" className={tableCssClass}>
                <thead>
                  <tr>
                    <th>{this.state.daysofWeek[0]}</th>
                    <th>{this.state.daysofWeek[1]}</th>
                    <th>{this.state.daysofWeek[2]}</th>
                    <th>{this.state.daysofWeek[3]}</th>
                    <th>{this.state.daysofWeek[4]}</th>
                    <th>{this.state.daysofWeek[5]}</th>
                    <th>{this.state.daysofWeek[6]}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows}
                </tbody>
              </table>

            <div>
              <ul className="dp-selected-list" style={{listStyle: 'none'}}>
                {selectedList}
              </ul>
            </div>

            </div>

            <div className="modal-footer">
              <WindowWidth />
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
  savePickedDates: PropTypes.func.isRequired
};



export default DatesPickerModal;
