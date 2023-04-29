import { FC, ReactNode } from "react";
import AppBar from "./AppBar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen overflow-y-auto overflow-x-hidden ">
        <AppBar />
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
