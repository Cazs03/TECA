import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../pages/notFound/NotFound";
import userPage from "../../pages/user/user";
import UserPage from "../../pages/user/user";
import User from "../../pages/user/user";
import Invoice from "../../pages/user/user";
import user from "../../pages/user/user";
import UserProfileById from "../UserProfile/UserProfileById";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user" element={<UserPage />}>
          <Route path=":UserProfileById" element={<UserProfileById />} />
        </Route>
        {/* <Route path="/"></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
