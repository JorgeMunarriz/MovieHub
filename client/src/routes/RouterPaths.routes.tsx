import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LogingPage, SignInPage, ProfilePage } from "../pages";
import { ErrorRoute, PrivateRoute, PublicRoute } from "../router";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LogingPage />} />
            <Route path="signin" element={<SignInPage />} />
          </Route>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            {/* <Route path="/userhome" element={<HomePage />}></Route> */}
          </Route>
          <Route path="*" element={<ErrorRoute/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
