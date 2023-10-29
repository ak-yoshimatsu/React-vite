import { NavLink, Outlet } from "react-router-dom";

const isCurrent = ({ isActive }: { isActive: boolean }) => isActive ? {
  color: 'Red',
  fontWeight: 'bold'
} : {};

const AppNavi = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/" style={isCurrent}>Home</NavLink></li>
        <li><NavLink to="/about" style={isCurrent}>About</NavLink></li>
        <li><NavLink to="/contact" style={isCurrent}>Contact</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default AppNavi;