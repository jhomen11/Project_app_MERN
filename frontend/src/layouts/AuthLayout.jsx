import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
