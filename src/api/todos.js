import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b6029930e2bb3d23bfc.mockapi.io/",
});

export const getTodos = () => {
    return api.get("/todos");
};