import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="Back Bite logo" className="h-14 inline" src="/pngegg.png"></img>
        </NavLink>
      </nav>
    </div>
  );
}