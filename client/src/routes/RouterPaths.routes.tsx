import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LogingPage, SignInPage } from "../pages/regular";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogingPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
