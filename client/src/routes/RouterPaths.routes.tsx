import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, ProfilePage, MoviesPageDetail } from "../pages";
import { ErrorRoute, PrivateRoute, PublicRoute } from "../router";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="movie/:id" element={<MoviesPageDetail />} />
          </Route>
          <Route path="*" element={<ErrorRoute/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
