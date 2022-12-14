import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";

const DoneItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();


  const isOdd = () => {
    return parseInt(todo.id)%2;
  }

  
  return (

    
    <div className="box" style={{backgroundColor: isOdd() ? '#f0f8ff': '#ffffff'}}>
      <span >{todo.text}</span>
    </div>
  );
};

export default DoneItem;
