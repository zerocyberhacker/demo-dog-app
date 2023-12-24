/** @format */

import "../../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleInfo,
  faDog,
  faGraduationCap,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

const LeftNav = () => {
  return (
    <nav className='left-navbar'>
      <ul>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faGraduationCap} className='left-nav-icon' />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faDog} className='left-nav-icon' />
          </Link>
        </li>

        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCircleInfo} className='left-nav-icon' />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faGithub} className='left-nav-icon' />
          </Link>
        </li>

        <li></li>
      </ul>
    </nav>
  );
};

export default LeftNav;
