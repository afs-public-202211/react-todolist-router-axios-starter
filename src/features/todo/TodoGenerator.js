import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../api/todos";
import { addTodo } from "./todoSlice";
import { Button, Input } from "antd";

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
      dispatch(addTodo(response.data));
    })

    //step2: call api and update db
    //step3: create a reducer
    setTodoText("");
  };

  return (
    <>
    <Input.Group compact style={{ backgroundColor: '#001529' }}>
      <Input
        style={{ width: '200px' }}         
        placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}/>
        <Button type="primary" onClick={onAdd}>add</Button>
    </Input.Group>
    </>
  );
};

export default TodoGenerator;
