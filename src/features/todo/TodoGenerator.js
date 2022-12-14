import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../api/todos";
import { addTodo } from "./todoSlice";
import { Button } from "antd";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    addTodos(todo).then((response) => {
      console.log(response.data);
    })
    dispatch(addTodo(todo));
    //step2: call api and update db
    //step3: create a reducer
    setTodoText("");
  };

  return (
    <>
      <input
        placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}
      />
      <button type="primary"onClick={onAdd}>add</button>
    </>
  );
};

export default TodoGenerator;
