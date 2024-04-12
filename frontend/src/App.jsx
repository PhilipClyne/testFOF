import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AdminMenu from "./pages/Admin/AdminMenu";

function App() {
  return (
    <>
      <AdminMenu />
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
