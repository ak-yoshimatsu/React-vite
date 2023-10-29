import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const isCurrent = ({ isActive }: { isActive: boolean }) => isActive ? {
  color: 'Red',
  fontWeight: 'bold'
} : {};

const AppNavi = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <p>アクセス数：{count}</p>
      <ul>
        <li><NavLink to="/" style={isCurrent}>Home</NavLink></li>
        <li><NavLink to="/about" style={isCurrent}>About</NavLink></li>
        <li><NavLink to="/contact" style={isCurrent}>Contact</NavLink></li>
      </ul>
      <hr />
      <Outlet context={[count, setCount]} />
    </>
  );
};

export default AppNavi;