import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="shadow sticky z-50 top-0 text-white"
      style={{ backgroundColor: "#003366" }}
    >
      <nav className="grid sm:grid-cols-12 gap-4 p-5">
        <div className="sm:col-span-4">
          <h1 className="font-semibold cursor-pointer">Saad Khalid</h1>
        </div>
        <div className="sm:col-span-4 flex justify-evenly">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/About"}>About</NavLink>
          <NavLink to={"/"}>Services</NavLink>
          <NavLink to={"/"}>Projects</NavLink>
          <NavLink to={"/"}>Blog</NavLink>
          <NavLink to={"/"}>Contact</NavLink>
        </div>
        <div className="sm:col-span-4">
          <button className="float-right">
            <img
              src="https://noxfolio.vercel.app/assets/images/shape/sidebar-tottler.svg"
              alt="hamburger"
              className="filter invert"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
