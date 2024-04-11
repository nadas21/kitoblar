import "./main.css";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";



export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <div className="box">
              <NavLink to={"/logo"} className="header-img">
                <img src={logo} alt="" />
              </NavLink>
              <ul className="header-list">
                <li className="header-link">
                  <a href="#" className="header-item">
                    Bosh sahifa
                  </a>
                </li>
                <li className="header-link">
                  <a href="#" className="header-item">
                    Nashr
                  </a>
                </li>
                <li className="header-link">
                  <a href="#" className="header-item">
                    Nazm
                  </a>
                </li>
                <li className="header-link">
                  <a href="#" className="header-item">
                    Maqolar
                  </a>
                </li>
                <li className="header-link">
                  <a href="#" className="header-item">
                    Forum
                  </a>
                </li>
                <li className="header-link">
                  <button className="header-btn">Registrasa</button>
                </li>
                <li className="header-link">
                  <button className="header-btn">Qo'shish</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
