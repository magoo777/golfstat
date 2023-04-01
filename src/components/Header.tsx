import { NavLink, NavLinkProps } from "react-router-dom";

export const Header = () => (
  <header>
    <nav className="nav">
      <ul className="nav__list">
        <li className="logo">Golfstat</li>
        <li>
          <NavLink 
            to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={ ({isActive}) => (
                isActive 
                ? "active"
                :"")}
            
             to="/registrera">
            ny runda
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  </header>
);

// Define the props for your NavLink component
interface CustomNavLinkProps extends NavLinkProps {
  activeClassName: string;
}

// Use the CustomNavLinkProps interface when rendering your NavLink components
const CustomNavLink: React.FC<CustomNavLinkProps> = (props) => (
  <NavLink {...props} />
);
