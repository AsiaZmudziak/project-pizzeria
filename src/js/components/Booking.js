import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';

export class Booking {
  constructor(bookingWidget){
    const thisBooking = this;
    thisBooking.render(bookingWidget);
    thisBooking.initWidgets();

  }
  render(bookingWidget){
    const thisBooking = this;

    /* generate HTML code from template */
    const generatedHTML = templates.bookingWidget();
    //console.log(generatedHTML);

    /* make an empty object thisBooking.dom */
    thisBooking.dom = {};
    //console.log(thisBooking.dom);

    /* add wrapper property to thisBooking.dom */
    thisBooking.dom.wrapper = bookingWidget;
    //console.log(thisBooking.dom.wrapper);

    /* zmień zawartość wrapper na kod HTML z szablonu */
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    //console.log(thisBooking.dom.wrapper.innerHTML);

    /* save the item from wrraper and match select.booking.peopleAmount in thisBooking.dom.peopleAmount */
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    //console.log(thisBooking.dom.peopleAmount);
    
    /* save from wrraper match to select.booking.hoursAmount in thisBooking.dom.hoursAmount */
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    //console.log(thisBooking.dom.hoursAmount);

    /* save from wrraper match to select.widgets.datePicker.wrapper in thisBooking.dom.datePicker */
    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    //console.log(thisBooking.dom.datePicker);
  }
  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);

  }
}
export default Booking;