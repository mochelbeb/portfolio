import { AppBarOrigin } from "@/app/layout/AppBar";

const storage = {
  getAppBarOrigin: () => {
    if (typeof window == "undefined") return null;
    const storedAppBarOrigin = localStorage.getItem("appBarOrigin");
    if (!isAppBarOrigin(storedAppBarOrigin)) return null;
    return storedAppBarOrigin;
  },
  setAppBarOrigin: (origin: AppBarOrigin) => {
    localStorage.setItem("appBarOrigin", origin);
  },
};
function isAppBarOrigin(origin: string | null): origin is AppBarOrigin {
  if (
    origin === "top" ||
    origin === "left" ||
    origin === "right" ||
    origin === "bottom"
  ) {
    return true;
  }
  return false;
}

export default storage;
