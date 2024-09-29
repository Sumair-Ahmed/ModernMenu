import "./Rightbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="noti">
        <IoIosNotificationsOutline className="icon" />
        <div className="dot"></div>
      </div>
      <div className="settings">
        <CiSettings className="icon" />
      </div>
      <div className="name">
        <h5>Nobita A.</h5>
        <h6>Admin</h6>
      </div>
      <div className="avatar"></div>
    </div>
  );
};

export default Rightbar;
