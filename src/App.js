import "./App.css";
import TodoList from "./features/todo/TodoList";
import {Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DoneListPage from "./pages/DoneListPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoList/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/done" element={<DoneListPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//todolist page -> TodoList
//about page -> text
//done list page -> Donelist
//404 page -> text
