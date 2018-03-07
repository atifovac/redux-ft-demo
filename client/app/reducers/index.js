import { combineReducers } from 'redux';
import { TodosReducer }  from './todos.reducer';
import { ExchangeReducer } from "./exchange.reducer";

export const RootReducer = combineReducers({
    todos: TodosReducer,
    exchange: ExchangeReducer
});
