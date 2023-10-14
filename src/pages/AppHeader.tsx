import { Outlet } from "react-router-dom";

const AppHeader = () => {
  return (
    <div>
      <div>App Header</div>
      <Outlet />
    </div>
  );
};

export default AppHeader;
