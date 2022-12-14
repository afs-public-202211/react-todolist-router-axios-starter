import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodos, updateTodos } from "../../api/todos";
import { useState } from "react";
import {Button, Modal} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [todoText, setTodoText] = useState(todo.text);

  const onToggle = () => {
    const toggledTodo = { ...todo, done: !todo.done};
    handleUpdate(todo.id, toggledTodo);
  };

  const updateText = () => {
    const toggledTodo = {...todo, text: todoText};
    handleUpdate(todo.id, toggledTodo);
  }

  const handleUpdate = (id, todo) => {
    updateTodos(id, todo).then((response)=>{
      console.log("Updated data: "+response.data);
      dispatch(toggleTodo(response.data));
    })
  }

  const onDelete = (event) => {
    event.stopPropagation();
    console.log(todo.id);
    deleteTodos(todo.id).then((response) =>{
      dispatch(deleteTodo(todo.id));
    })
  };

  const showModal = () => {
    setOpen(true);
  }

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    updateText();
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setTodoText(todo.text);
    setOpen(false);
  };

  const onChange = (event) => {
    setTodoText(event.target.value);
  }

  return (
    <div className="box">
      <span className={todo.done ? "done" : ""}  onClick={onToggle}>{todo.text}</span>
      <button onClick={showModal}>Edit<EditOutlined/></button>
      <span className="times" onClick={onDelete}>
        &times;
      </span>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <TextArea
        showCount
        maxLength={500}
        onChange={onChange}
        value={todoText}
        />
      </Modal>
    </div>
  );
};

export default TodoItem;
