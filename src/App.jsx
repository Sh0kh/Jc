import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import './Style/Media.css'
function App() {
  return (
    <Router>
      <Routes>

        {/* hehe */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<AppLayout />}>
          {/* <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
          </Route> */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
