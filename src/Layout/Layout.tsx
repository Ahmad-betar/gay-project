import { ReactNode, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({  }: { children: ReactNode }) => {
  const [Open, setOpen] = useState<boolean>(false);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr] duration-500 ease-in-out transition-all">
      <SideBar Open={Open} openHandler={openHandler} />
      <div className="col-span-2">
        <Header Open={Open} />
        <div className="py-5 px-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
