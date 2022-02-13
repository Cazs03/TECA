import { CustomsHeaders, EndPoints } from "../constants/endpoints";
import { InitialLoadDateCalendar } from "../utils/dates/InitialLoadDateCalendar";

export function fetchGetUser(params: any, setResponseErrors: any, setUserData: any) {
  let myheaders = {
    "X-WEB-KEY": CustomsHeaders.enviroment,
  };
  let usersId: string = params.UserProfileById || "";
  const getUser = EndPoints.getUser.replace(":usersId", params.UserProfileById);
  fetch(getUser, {
    method: "GET",
    headers: myheaders,
  })
    .then(response => response.json())
    .then(response => {
      if (response.errors) {
        setResponseErrors(response.errors[0]);
      } else {
        response.data.loan_weeks = 1;
        response.data.loan_date = InitialLoadDateCalendar();
        setUserData(response.data);
      }
    });
}
