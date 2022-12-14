import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { getTodos } from "../../api/todos";
import { addTodos } from "./todoSlice";
import { Row } from "antd/";

const TodoList = () => {
  // get the data from store
  const navigate = useNavigate();
  const todos = useSelector((state) => {
    return state.todoList;
  });

  const navigateDone = () => {
    navigate('/done');
  }
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response) =>{
      console.log(response.data);
      dispatch(addTodos(response.data));
    })
  }, [])
  

  return (
    <>
      <TodoGroup todos={todos} />
    </>
  );
};

export default TodoList;
