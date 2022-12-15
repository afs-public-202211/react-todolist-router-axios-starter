import DoneItem from "./DoneItem";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  return props.todos.map((todo) => {
    return <DoneItem todo={todo} key={todo.id} />;
  });
};

export default TodoGroup;