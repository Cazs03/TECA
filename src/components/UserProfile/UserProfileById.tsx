import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Person } from "../../libs/interfaces/person";
import Calendar from "../Calendar/Calendar";
import { fetchGetUser } from "../../services/fetchGetUser";
import { person } from "../../libs/class/person";
import { updateUser } from "../../services/updateUser";
import TooltipError from "../TooltipError/TooltipError";
import UpdateUserSuccess from "../updateUserSuccess/UpdateUserSuccess";
import "./../../assets/userprofilebyid.scss";

export default function UserProfileById() {
  let params = useParams();
  const [responseErrors, setResponseErrors] = useState(null);
  const [updateErrors, setUpdateErrors] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [UserData, setUserData] = useState<Person>(person);

  const handleInputChange = (event: any) => {
    setUserData({
      ...UserData,
      [event.target.name]: event.target.value,
    });
  };
  function handleCalendarChange(newValue: any) {
    setUserData({
      ...UserData,
      loan_date: newValue,
    });
  }

  useEffect(() => {
    fetchGetUser(params, setResponseErrors, setUserData);
  }, []);

  const handleCheckBox = (e: any) => {
    setChecked(e.target.checked);
    UserData.check = e.target.checked ? 1 : 0;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(UserData, setUpdateErrors, setUpdateSuccess);
  };

  return (
    <div className="userprofilebyid">
      {/* <h2>updateSuccess: {updateSuccess}</h2> */}

      {updateSuccess ? <UpdateUserSuccess UserData={UserData} /> : ""}

      {/* <h2>UserProfileById: {params.UserProfileById}</h2> */}
      {responseErrors ? (
        <TooltipError responseErrors={responseErrors} />
      ) : !updateErrors ? (
        <form onSubmit={handleSubmit} className={updateSuccess ? "hidden" : ""}>
          <label>
            Nombre: <input type="text" id="name" name="name" disabled value={UserData.name ? UserData.name : ""} />
          </label>
          <label>
            Apellidos:
            <input type="text" id="surname" name="surname" disabled value={UserData.surname ? UserData.surname : ""} />
          </label>
          <label>
            Email: <input type="email" id="email" name="email" disabled value={UserData.email ? UserData.email : ""} />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{11}"
              title="Telefono invalido"
              required
              onChange={handleInputChange}
              defaultValue={UserData.phone ? UserData.phone : ""}
            />
          </label>
          <label>
            Edad:
            <input
              type="number"
              id="age"
              name="age"
              onChange={handleInputChange}
              defaultValue={UserData.age ? UserData.age : ""}
              required
            ></input>
          </label>
          <label>
            Importe Préstamo:
            <input
              id="loan_amount"
              name="loan_amount"
              type="number"
              pattern="[0-9]"
              min="11"
              max="1000"
              title="Numbers only"
              onChange={handleInputChange}
              defaultValue={UserData.loan_amount ? UserData.loan_amount : ""}
              required
            ></input>
          </label>
          <Calendar onChange={handleCalendarChange} />
          <label>
            Tiempo a devoler:
            <select id="loan_weeks" name="loan_weeks" required onChange={handleInputChange}>
              {buildOptions()}
            </select>
          </label>

          <label htmlFor="check">
            Aceptar térnimos y condiciones,
            <input id="check" type="checkbox" checked={checked} onChange={handleCheckBox} />
            obligatorio, para aceptar términos con enlace a:
            <a href="https://cloudframework.io/terminos-y-condiciones/" target="_blank">
              terminos-y-condiciones
            </a>
          </label>

          <input type="submit" value="Submit" disabled={!checked} />
        </form>
      ) : (
        <>
          <TooltipError responseErrors={updateErrors} />
          <button onClick={e => setUpdateErrors(null)}>Volver al formulario</button>
        </>
      )}
    </div>

    //   {
    //   if (!updateSuccess) {
    //     return <h1>lll</h1>;
    //   }
    // }
  );
}

function buildOptions() {
  var arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return arr;
}
