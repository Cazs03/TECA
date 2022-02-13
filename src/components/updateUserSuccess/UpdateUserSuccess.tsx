import "./../../assets/UpdateUserSuccess.scss";

export default function UpdateUserSuccess(props: any) {
  return (
    <div className="UpdateUserSuccess">
      <h2>Resumen </h2>
      {Object.keys(props.UserData).map((key, idx) => (
        <p key={idx}>
          <label>{key}: </label>
          {props.UserData[key]}
        </p>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <h2>updateUserSuccess {props.UserData.name}</h2>
  //   </div>
  // );
}
