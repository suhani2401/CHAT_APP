import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import Detail from "../../components/detail/detail";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default Home;
