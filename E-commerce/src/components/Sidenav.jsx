import { Drawer, Typography } from "@material-tailwind/react";
import {} from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidenav = ({ open, closeDrawer }) => {
  return (
    <Drawer open={open} onClose={closeDrawer} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          LootLo
        </Typography>
        <RiCloseLine onClick={closeDrawer} size={25} />
      </div>

      <div className="mt-10 space-y-4 text-center">
        <Link to="/dashboard">
          <h1
            onClick={() => {
              closeDrawer();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="mx-10 rounded-lg py-1 text-[18px] text-black"
          >
            Home
          </h1>
        </Link>
        <Link to="/products">
          <h1
            onClick={() => {
              window.scrollTo({
                top: 550,
                behavior: "smooth",
              });
              closeDrawer();
            }}
          >
            Products
          </h1>
        </Link>
      </div>
      <h1 className="absolute bottom-5 left-20 rounded-lg bg-blue-600 px-10 py-1 text-center text-lg font-bold text-white">
        Login
      </h1>
    </Drawer>
  );
};

export default Sidenav;
