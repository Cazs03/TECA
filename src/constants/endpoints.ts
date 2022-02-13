//X-WEB-KEY = 'Development'
//id = {número}
//https://api7.cloudframework.io/recruitment/fullstack/users?id={numero}
//[POST] https://api7.cloudframework.io/recruitment/fullstack/users/{id}
const EndPoints = {
  getUser: "https://api7.cloudframework.io/recruitment/fullstack/users?id=:usersId",
  updateUser: "https://api7.cloudframework.io/recruitment/fullstack/users/:usersId",
};

const CustomsHeaders = {
  keyName: "X-WEB-KEY",
  enviroment: "Development",
};
export { EndPoints, CustomsHeaders };
