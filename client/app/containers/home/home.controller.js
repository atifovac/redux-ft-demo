import {actions} from '../../actions';

class HomeController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;

        this.todo = '';
        this.todo2 = '';
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
    }

    submitTodo1() {
        this.$ngRedux.dispatch(actions.TodoActions.addTodo(this.todo));
        this.todo = '';
    }

    submitTodo2() {
        this.$ngRedux.dispatch(actions.SecondTodoActions.addTodo2(this.todo2));
        this.todo2 = '';
    }

    removeTodo1(index) {
        this.$ngRedux.dispatch(actions.TodoActions.removeTodo(index));
    }

    removeTodo2(index) {
        this.$ngRedux.dispatch(actions.SecondTodoActions.removeTodo2(index));
    }

    $onDestroy() {
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            todos1: state.todos,
            todos2: state.todos2
        };
    }
}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
