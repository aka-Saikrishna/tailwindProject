import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="border px-2 py-2 text-sm rounded-full text-white bg-gradient-to-r from-yellow-200 to-rose-500 cursor-pointer font-semibold">
          Hosterr is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center gap-16 font-lato cursor-pointer ">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="">Find Domain</a>
        </li>
        <li>
          <a href="">Why Hosterr</a>
        </li>
      </ul>
      <div className=" hidden lg:flex items-center justify-center gap-4">
        <a className=" text-gray-500" href="">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white">Join waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
