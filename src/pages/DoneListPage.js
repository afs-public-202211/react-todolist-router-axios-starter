import React from 'react'
import TodoGroup from '../features/todo/TodoGroup'
import DoneGroup from '../features/todo/DoneGroup'
import { useSelector } from 'react-redux';

export default function DoneListPage() {
    const todos = useSelector((state) => {
        return state.todoList.filter(todo =>  todo.done === true
        );
      });

    // function toDoneList(todos) {
    //     return todos.filter(todo => {
    //         return todo.done === true;
    //     })
    // }

    return (
        <div>
            <DoneGroup todos = {todos}/>
        </div>
    
  )
}
