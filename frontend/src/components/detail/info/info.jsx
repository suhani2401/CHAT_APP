import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy & Help</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="bg.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="bg.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="bg.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="bg.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <img src="./arrowUp.png" alt="" className="icon" />
        </div>
      </div>
      <div className="btn">
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Info;
