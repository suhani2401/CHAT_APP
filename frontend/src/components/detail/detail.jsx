import "./detail.css";
import Info from "./info/info";
import UserDetail from "./userDetail/userDetail";

const Detail = () => {
  return (
    <div className="detail">
      <UserDetail />
      <Info />
    </div>
  );
};

export default Detail;
