```js
// package.json

{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "rasa-webchat": "^1.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },



// App.vue

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
```

why not running ?
