import { useState } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";

const isCurrent = ({ isActive }: { isActive: boolean }) => isActive ? {
  color: 'Red',
  fontWeight: 'bold'
} : {};

const AppNavi = () => {
  const [count, setCount] = useState<number>(0)
  const navigation = useNavigation()

  return (
    <>
      <p>アクセス数：{count}</p>
      <ul>
        <li><NavLink to="/" style={isCurrent}>Home</NavLink></li>
        <li><NavLink to="/about" style={isCurrent}>About</NavLink></li>
        <li><NavLink to="/contact" style={isCurrent}>Contact</NavLink></li>
        <li><NavLink to="/form" style={isCurrent}>Form</NavLink></li>
        <li><NavLink to="/weathers/10" state={10}>Weather</NavLink></li>
      </ul>
      <hr />
      {
        navigation.state === 'loading' ? <p>Loading...</p> : <Outlet context={[count, setCount]} />
      }
    </>
  );
};

export default AppNavi;