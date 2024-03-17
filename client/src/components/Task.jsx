import AddTask from "./AddTask";
import Nav from "./Nav";
import TaskContainer from "./TaskContainer";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");
const Task = () => {
  return (
    <>
      <Nav></Nav>
      <AddTask socket={socket}></AddTask>
      <TaskContainer socket={socket}></TaskContainer>
    </>
  );
};

export default Task;
