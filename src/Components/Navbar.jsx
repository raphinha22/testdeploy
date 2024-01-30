import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "Service",
    path: "service",
  },
  {
    link: "Accesseries",
    path: "Accesseries",
  },
  {
    link: "About",
    path: "about",
  },
];

const Navbar = () => {
   const [Open,SetOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <h1 className="logo">Phone Shop</h1>
      <button onClick={()=> SetOpen(!Open)} className="nav-toggle">
        {/* <Menu /> */}
        {Open? <X /> : <Menu />}
      </button>
      <ul className={Open? "nav-lists active" : "nav-lists"}>
        {links.map((link) => {
          return (
            <li key={link.link} className="nav-link"> 
              <NavLink onClick={()=>SetOpen(false)} to={link.path}>{link.link}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
