import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { authContext } from '../../contexts/Contexts';
import './Nav.scss'
import userIcon from "../../assets/icons/profile-icon.png";
import { ReactComponent as Spaces} from "../../assets/icons/basketball-hoop.svg";
import { ReactComponent as GroupIcon} from "../../assets/icons/group-svgrepo-com (1).svg";
import { ReactComponent as LogoIcon} from "../../assets/icons/holo_logo.svg";
import { ReactComponent as Home } from "../../assets/icons/home-svgrepo-com.svg";
import { ReactComponent as Exp} from "../../assets/icons/2305629_gallery_image_mountain_photo_pic_icon.svg";

const Nav = () => {
  const {isLogged, setIsLogged} = useContext(authContext)
  return (
    <div className="navbar">
      <div className="navbar-container">
          <nav className="navbar-contents">
            <div className="nav-header">
              <LogoIcon />
              <h1>holo.</h1>
            </div>
            <ul className="navbar-links">
              <li>
                <NavLink to="/home" activeClassName="active">
                  <span>
                    <Home className="home-icon"/>
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/spaces">
                  <span>
                    <Spaces className="spaces-icon"/>
                  </span>
                  Spaces
                </NavLink>
              </li>
              <li>
                <NavLink to="/experiences">
                  <span>
                    <Exp className="exp-icon"/>
                  </span>
                  Experiences
                </NavLink>
              </li>
              <li>
                <NavLink to="/groups">
                  <span>
                    <GroupIcon className="group-icon"/>
                  </span>
                  Groups
                </NavLink>
                
              </li>
            </ul>
            <div className="nav-user">
              { 
                isLogged ?
                <p>Guest</p>
                :
                <div className="nav-register">
                  <NavLink to="/login">
                    <p>Log in</p>
                  </NavLink>
                  
                  <p>/</p>
                  <NavLink to="/register">
                    <p>Sign up</p>
                  </NavLink>
                  
                </div>
                
              }
              <img src={userIcon}/>
            </div>
          </nav>
      </div>
      <div className="border-bottom"></div>
    </div>
    
  )
}

export default Nav;