import { TODOS_2 } from '../constants/todos2';

function addTodo2(todo){
    return {
        type: TODOS_2.ADD_TODO_2,
        payload: todo
    }
}

function removeTodo2(index){
    return {
        type: TODOS_2.REMOVE_TODO_2,
        payload: index
    };
}

export default { addTodo2, removeTodo2 };
