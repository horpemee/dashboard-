import "./sidebar.scss";
import logo from "../sidebar/images/logo.svg";
import back from "../sidebar/images/back.png";
import cube from "../sidebar/images/cube.png";
import cubic from "../sidebar/images/cubic.png";
import user from "../sidebar/images/Icon.png";
import bright from "../sidebar/images/bright.png";
import moon from "../sidebar/images/moon 1.png";
import settings from "../sidebar/images/settings.png";
import logout from "../sidebar/images/slide.png";
import time from "../sidebar/images/time.png";
import setting from "../sidebar/images/setting.png";
import set from "../sidebar/images/set.svg"
import dashboard from "../sidebar/images/Frame 12.png"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="icon" />
      </div>
      <div className="center">
        <ul>
        <li>
            <img src={ dashboard} alt="dashboard" />
          </li>
          <li>
            <img src={cube} alt="cube" />
          </li>
          
          <li>
            <img src={user} alt="user" />
          </li>
         
          <li>
            <img src={cubic} alt="cubic" />
          </li>
          <li>
            <img src={setting} alt="setting" />
          </li>
          <li>
            <img src={time} alt="time" />
          </li>

          <div className="groups">
          <li className="bright">
            <img src={bright} alt="bright" />
          </li>
          
          <li className="moon"  >
            <img src={moon} alt="moon" />
          </li>
          </div>
          
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <img src={logout} alt="logout" />
          </li>
          <li>
            <img src={settings} alt="settings" />
          </li>
          <li>
            <img src={back} alt="back" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
