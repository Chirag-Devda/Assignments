import { Drawer, Typography, iconButton } from "@material-tailwind/react";
import { MdKeyboardArrowDown } from "react-icons/md";
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

      <div className="text-center mt-10 space-y-4">
        <Link to="/dashboard">
          <h1
            onClick={() => {
              closeDrawer();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-black mx-10 py-1 rounded-lg text-[18px]"
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
      <h1 className="absolute text-white py-1 px-10 left-20 rounded-lg bottom-5 bg-blue-600 text-center text-lg font-bold">
        Login
      </h1>
    </Drawer>
  );
};

export default Sidenav;
