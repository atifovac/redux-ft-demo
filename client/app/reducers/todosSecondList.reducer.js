import { TODOS_2 } from '../constants/todos2';

const initialState = [];

export function TodosSecondListReducer(state = initialState, action) {
    switch(action.type) {
        case TODOS_2.ADD_TODO_2:
            return [...state, action.payload];
        case TODOS_2.REMOVE_TODO_2:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
