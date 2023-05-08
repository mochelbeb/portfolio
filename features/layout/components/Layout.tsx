import { FC, ReactNode } from "react";
import AppBar from "./AppBar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex h-full min-h-screen  w-full overflow-y-auto overflow-x-hidden ">
        <AppBar />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};
export default Layout;
