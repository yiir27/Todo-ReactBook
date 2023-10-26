import axios from "axios"

//モックサーバーと通信する


const todoDataUrl = "http://localhost:3200/todos"

//取得
export const getAllTodosData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
}
//追加
export const addTodoData = async(todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
}
//削除
export const deleteTodoData = async(id) => {
    const response = await axios.delete(`${todoDataUrl}/${id}`);
    return id;
}
//更新
export const updateTodoData = async(id, todo) => {
    const response = await axios.put(`${todoDataUrl}/${id}`,todo);
    return response.data;
}
