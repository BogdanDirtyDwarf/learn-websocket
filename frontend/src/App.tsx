import { useEffect } from "react";
import { socket } from "./socket/socket";

const App = () => {
  useEffect(() => {
    socket.on("chat", (e: any) => {
      console.log(e);
    });
  }, []);

  return (
    <div
      className="App"
      onClick={() => socket.emit("chat", { message: "1234" })}
    >
      1
    </div>
  );
};

export default App;
