import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomsHeaders, EndPoints } from "../../constants/endpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Person } from "../../libs/interfaces/person";

export default function Calendar(props: any) {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const [startDate, setStartDate] = useState(date);

  function handleCalendarChange(event: Date) {
    setStartDate(event);
    var value = event.getFullYear() + "-" + (event.getUTCMonth() + 1) + "-" + event.getDate();
    props.onChange(value);
  }

  return (
    <label>
      Fecha a conseguir el préstamo
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        minDate={date}
        onChange={date => date && handleCalendarChange(date)}
      ></DatePicker>
    </label>
  );
}
