import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LogingPage } from "../pages/regular";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
