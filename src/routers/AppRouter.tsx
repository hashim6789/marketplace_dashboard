import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Admin Routes */}
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
