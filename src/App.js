import logo from "./logo.svg";
import "./App.css";

import Widget from "rasa-webchat";

function App() {
  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"http://localhost:5500"}
      socketPath={"/socket.io/"}
      customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"Title"}
    />
  );
}

export default App;
