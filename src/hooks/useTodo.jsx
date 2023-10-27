import { useEffect, useState } from "react"
import { ulid } from "ulid";
import * as todoData from "../apis/todos"

export const useTodo = () => {
    const [todoList, setTodoList] = useState([]);
    //役割は初期データの取得、setTodoListに反映されて下の関数にも影響していく
    useEffect(() => {
        todoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    },[]);

    const toggleTodoListItemStatus = (id, done) => {
        const todoItem = todoList.find((item)=>item.id === id);
        //見つけたitemをコピーして反転させている
        const newTodoItem = {...todoItem, done: !done};
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            //どちらに当てはまるのかチェック
            const newTodoList = todoList.map((item) => 
                item.id !== updatedTodo.id ? item : updatedTodo
            );
            setTodoList(newTodoList);
        });
    }

    const addTodoListItem = (todoContent) => {
        const newTodoItem = {
            //done->falseなのは未完了リストに入る
            content: todoContent,
            id: ulid(),
            done: false
        };
        //新しく追加したデータと現在未完了のリストを返している
        return todoData.addTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };

    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((deleteListItemId)=> {
            const newTodoList = todoList.filter(
                //itemを比較して振り分け
                (item) => item.id !== deleteListItemId
            );
            setTodoList(newTodoList);
        });
    };

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
};