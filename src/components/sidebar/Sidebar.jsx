import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        top
        <ul>
          <li>
            <img src="../sidebar/images/logo.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className="bottom">bottom</div>
    </div>
  );
};

export default Sidebar;
