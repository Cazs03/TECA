import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomsHeaders, EndPoints } from "../../constants/endpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Person } from "../../libs/interfaces/person";
import Calendar from "../Calendar/Calendar";
import { fetchGetUser } from "../../services/fetchGetUser";
import { person } from "../../libs/class/person";
import { updateUser } from "../../services/updateUser";

export default function Thanks() {
  return (
    <div>
      <h2>
        Si la respuesta es status:200, se muestra una pantalla de “Gracias” con el resumen de los datos enviados, además
        de informar al usuario de que en breve nos pondremos en contacto.
      </h2>
    </div>
  );
}
