import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b6029930e2bb3d23bfc.mockapi.io/",
});

export const getTodos = () => {
    return api.get("/todos");
};

export const addTodos = (todo) => {
    return api.post("/todos", todo);
}

export const updateTodos = (id, todo) => {
    return api.put("/todos/"+id, todo);
}

export const deleteTodos = (id) => {
    return api.delete("/todos/"+id);
}