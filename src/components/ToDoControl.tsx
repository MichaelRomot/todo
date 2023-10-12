import TimePicker from "./TimePicker";

const ToDoControl = () => {
  return (
    <div className="m-todo-control">
      <span>What would you like to do?</span>
      <input className="m-input-box" type="text" placeholder="Note"></input>
    </div>
  );
};

export default ToDoControl;
