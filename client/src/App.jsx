import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import userRoutes from "./userRoutes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.userInfo)
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar userRoutes={userRoutes} routes={routes} />
      </div>
      <Routes>
        {user ? (userRoutes.map(
          ({path,element},key)=>
          element && <Route key={key} exact path={path} element={element} />
        )):(routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
