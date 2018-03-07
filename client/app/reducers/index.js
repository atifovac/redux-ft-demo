import { combineReducers } from 'redux';
import { TodosReducer }  from './todos.reducer';
import { TodosSecondListReducer }  from './todosSecondList.reducer';

export const RootReducer = combineReducers({
    todos: TodosReducer,
    todos2: TodosSecondListReducer
});
