import Rightbar from "../Rightbar/Rightbar";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="header-up">
          <div className="header-title">
            <h1>Dashboard</h1>
            <input type="search" placeholder="Search here..." />
          </div>
          <div className="header-right">
            <Rightbar />
          </div>
        </div>
        <div className="child">{children}</div>
      </div>
    </>
  );
};

export default Header;
