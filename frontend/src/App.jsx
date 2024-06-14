// import { Route, Router } from "express";
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";

const App = () => {

  // const user = false

  return (
    <div className="container">
          <List/>
          <Chat/>
          <Detail/>
    </div>
  );
};

export default App;
