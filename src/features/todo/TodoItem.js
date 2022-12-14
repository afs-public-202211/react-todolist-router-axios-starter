import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodos, updateTodos } from "../../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const toggledTodo = {};
    toggledTodo.id = todo.id;
    toggledTodo.done = !todo.done;
    toggledTodo.text = todo.text;
    updateTodos(todo.id, toggledTodo).then((response)=>{
      console.log(response.data);
      dispatch(toggleTodo(todo.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    console.log(todo.id);
    deleteTodos(todo.id).then((response) =>{
      dispatch(deleteTodo(todo.id));
    })
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <span className="times" onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
