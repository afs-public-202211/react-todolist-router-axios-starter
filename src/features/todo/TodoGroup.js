import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  return props.todos.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });
};

export default TodoGroup;
