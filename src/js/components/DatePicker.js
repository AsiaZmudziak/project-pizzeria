class DatePicker extends BaseWidget {
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

}

parseValue(newValue){
    return newValue;
  }

  isValid(){
    event.preventDefault();
    return true;
  }
  
  renderValue(){}
}