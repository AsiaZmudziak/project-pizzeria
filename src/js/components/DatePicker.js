/* global flatpickr */

import BaseWidget from './BaseWidget.js';
import {utils} from '../utils.js';
import {select, settings} from '../settings.js';

class DatePicker extends BaseWidget {
    constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;
    
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
    }

    initPlugin() {
    const thisWidget = this;
    
    /* create thisWidget.minDate and equal to new Date (thisWidget.value) */
    thisWidget.minDate = new Date(thisWidget.value);

    /* is to create thisWidget.maxDate date after thisWidget.minDate by the amount in settings.datePicker.maxDaysInFuture */
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    flatpickr(thisWidget.dom.input, {
        defaultDate: thisWidget.minDate,
        minDate: thisWidget.minDate,
        maxDate: thisWidget.maxDate,
        locale: {
          firstDayOfWeek: 1 // start week on Monday
        },
        disable: [
          function(date) {
            // return true to disable
            return date.getDay() === 1;
          }
        ]
    });
}

parseValue(value){
    return value;
  }

  isValid(){
    event.preventDefault();
    return true;
  }

  renderValue(){}
}
export default DatePicker;