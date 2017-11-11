import expect from 'expect';
import * as hf from './HelperFunctions';

describe('Helper Functions', () => {

  describe('get Month Name from Calendar Date', () => {
    it('if large calendar', () => {
      //arrange
      const calendarDate = new Date(2017, 10, 11);
      const calendarSize = "large";
      //act
      const monthName = hf.getMonthName(calendarDate, calendarSize);
      //assert
      expect('November').toEqual(monthName);
    });
    it('if small calendar', () => {
      //arrange
      const calendarDate = new Date();
      const calendarSize = "small";
      //act
      const monthName = hf.getMonthName(calendarDate, calendarSize);
      //assert
      expect('Nov').toEqual(monthName);
    });
  });

  describe('get Day Names', () => {
    it('if large calendar', () => {
      //arrange
      const day6 = "Sat";
      //act
      const dayName = hf.getDayNames("large")[6];
      //assert
      expect(day6).toEqual(dayName);
    });

    it('if small calendar', () => {
      //arrange
      const day6 = "S";
      //act
      const dayName = hf.getDayNames("small")[6];
      //assert
      expect(day6).toEqual(dayName);
    });
  });

  describe('make Date Array of Day Numbers based on Calendar Date', () => {
    it('arraying month day numbers on calendar 7x5 grid', () => {
      //arrange
      const calendarDate = new Date(2017, 10, 11);
      //act
      const calendarDateArray = hf.makeDateArray(calendarDate);
      //assert
      expect(0).toEqual(calendarDateArray[0]);
      expect(6).toEqual(calendarDateArray[8]);
    });
  });

  describe('get First Date of This Month', () => {
    it('first date of month', () => {
      //arrange
      const calendarDate = new Date(2017, 10, 11);
      //act
      const firstDateofMonth = hf.calcFirstDateofMonth(calendarDate);
      //assert
      expect(new Date(2017, 10, 1)).toEqual(firstDateofMonth);
    });

  });

  describe('make Object for Selected Date', () => {
    it('last date of month', () => {
      //arrange
      const calendarDate = new Date(2017, 10, 11);
      //act
      const lastDateofMonth = hf.calcLastDateofMonth(calendarDate);
      //assert
      expect(new Date(2017, 10, 30)).toEqual(lastDateofMonth);
    });

  });

  describe('make Object for Selected Date', () => {
    it('date object: year*10000 + month*100 + day', () => {
      //arrange
      const currentDate = new Date(2017, 11, 1);
      const dayNum = 22;
      //act
      const dateObject = hf.makeSelectedDateObject(currentDate, dayNum);
      //assert
      expect(20171122).toEqual(dateObject.id);
    });

  });

  describe('return A Formatted Date String', () => {
    it('', () => {
      //arrange
      //act
      //assert
    });

  });

  describe('compute New Date from a Date and Day', () => {
    it('', () => {
      //arrange
      const dateObject = { year:2017 , month:10 , day:22 };
      //act
      const s = hf.formatDateObject(dateObject);
      //assert
      expect('Wed, November 22, 2017').toEqual(s);
    });

  });

});


/*
  describe('', () => {
    it('', () => {
      //arrange
      //act
      //assert
    });
  });
*/
