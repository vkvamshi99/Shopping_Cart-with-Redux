import { Outlet } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarPanel />
        <Outlet />
      </Provider>
    </>
  );
};

export default RootLayout;
