import { CustomsHeaders, EndPoints } from "../constants/endpoints";
import { Person } from "../libs/interfaces/person";

export function updateUser(UserData: Person, setResponseErrors: any, setUpdateSuccess: any) {
  // const UserDataFixed = {
  //   ID: UserData.id,
  //   name: UserData.name,
  //   surname: UserData.surname,
  //   email: UserData.email,
  //   phone: UserData.phone,
  //   age: UserData.age,
  //   loan_amount: UserData.loan_amount,
  //   loan_weeks: UserData.loan_weeks,
  // };

  var data = new FormData();

  var userData = UserData as any;
  for (var key in UserData) {
    data.append(key, userData[key]);
  }

  // data.append("loan_date", "llll");

  // const config = {
  //   headers: { "content-type": "multipart/form-data" },
  // };
  let myheaders = {
    "X-WEB-KEY": CustomsHeaders.enviroment,
  };
  const updateUser = EndPoints.updateUser.replace(":usersId", UserData.id);
  const requestOptions = {
    method: "POST",
    headers: myheaders,
    body: data,
  };
  fetch(updateUser, requestOptions)
    .then(response => response.json())
    .then(response => {
      if (response.errors) {
        setResponseErrors(response.errors[0]);
      }
      if (response.success) {
        setUpdateSuccess(true);
      }
    });
}
