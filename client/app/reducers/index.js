import { combineReducers } from 'redux';
import { TodosReducer }  from './todos.reducer';
import devToolsEnhancer from 'remote-redux-devtools';

export const RootReducer = combineReducers({
    todos: TodosReducer
});
