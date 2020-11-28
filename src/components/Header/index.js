import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "./Header.css";

function Header() {
  let checkToken = localStorage.getItem("token");
  const history = useHistory();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };
  const handleShowProfile = () => {
    alert("This feature in under construction");
  };
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <h2>iCloud</h2>
        </Link>
        <Link to="/reminder">
          <h2>Reminders</h2>
        </Link>
      </div>
      <div className="header-right">
        {checkToken !== null ? (
          <>
            <div className="dropdown">
              <div className="dropdown-name">
                <p>
                  Admin
                  <span>
                    <FaAngleDown className="header-icon" />
                  </span>
                </p>
              </div>
              <div class="dropdown-content">
                <p onClick={handleShowProfile}>Profile</p>
                <p onClick={handleLogout}>LogOut</p>
              </div>
            </div>
          </>
        ) : (
          <div className="header-login">
            <Link to="/login">
              <h2>Login</h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
