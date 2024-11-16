import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center bg-[#fafafa] w-full min-h-[100vh] h-max ">
      <Outlet />
    </div>
  );
}
