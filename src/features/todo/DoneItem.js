import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";

const DoneItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <div className="box">
      <span >{todo.text}</span>
    </div>
  );
};

export default DoneItem;
