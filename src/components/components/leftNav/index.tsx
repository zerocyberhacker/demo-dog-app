/** @format */

import "../../style/style.css";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <nav className='left-navbar'>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
