import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly p-4 bg-gray-300 gap-30">
      <h1 className="text-xl font-bold">
        My Website
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;