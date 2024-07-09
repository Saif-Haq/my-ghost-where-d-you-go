import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="Ghost logo" className="h-14 inline" src="/pngegg.png"></img>
          <p>Home</p>
        </NavLink>

        <div className="flex items-end">
          <NavLink to="/playlist" className="mr-3">
            <p>Spotify Playlist</p>
          </NavLink>

          <NavLink to="/about" className="mr-3">
            <p>About</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}