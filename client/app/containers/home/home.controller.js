import TodoActions from '../../actions/todo.actions';
import {getEurUsdExchange} from "../../middleware";

class HomeController {
  constructor($ngRedux) {

    this.todo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  submitTodo(){
    this.addTodo(this.todo);
    this.todo = '';
  }

  getExchange() {
    debugger;
    // only for debug purpose
    getEurUsdExchange()
  }

  $onDestroy(){
    this.unsubscribe();
  }

  mapStateToThis(state) {
      return {
          todos: state.todos,
          exchange: state.exchange
      };
  }
}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
