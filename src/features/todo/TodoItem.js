import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodos, updateTodos } from "../../api/todos";
import { useState } from "react";
import {Button, Modal, Row, Col} from 'antd';
import {EditOutlined, CloseOutlined} from '@ant-design/icons';
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
    console.log(toggledTodo);
    handleUpdate(todo.id, toggledTodo);
  };

  const updateText = () => {
    const updatedTodo = {...todo, text: todoText};
    console.log(updatedTodo);
    handleUpdate(todo.id, updatedTodo);
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

  const isOdd = () => {
    return parseInt(todo.id)%2;
  }

  return (
    <div className="box" style={{backgroundColor: isOdd() ? '#f0f8ff': '#ffffff'}}>
      <Row>
        <Col span={4}>
          <Button onClick={showModal}>Edit<EditOutlined/></Button>
        </Col>
        <Col span={18} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className={todo.done ? "done" : ""}  onClick={onToggle}>{todo.text}</span>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="times" onClick={onDelete}>
          <CloseOutlined style={{color: '#F9423A'}}/>
        </span>
        </Col>
      </Row>
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
