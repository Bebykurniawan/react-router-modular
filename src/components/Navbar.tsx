import { NavLink } from "react-router"

const Navbar = () => {
    interface link {
        name: string,
        to: string | number
    }
    const links: link[] = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
      ];

  return (
    <nav className="navigation">
    {links.map((link, index) => (
      <span key={index} className="links">
        <NavLink to={String(link.to)} className="a">
          {link.name}
        </NavLink>
        {index < links.length - 1 && " | "}
      </span>
    ))}
  </nav>
  )
}

export default Navbar