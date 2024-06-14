import { Route, Router } from "express";
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";
import Login from "./components/login/login";

const App = () => {

  const user = false

  return (
    <div className="container">
          <List/>
          <Chat/>
          <Detail/>
    </div>
  );
};

export default App;
