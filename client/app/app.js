import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngRedux      from 'ng-redux';

import AppComponent from './app.component';

import NavigationComponent  from './components/navigation/navigation';
import HomeComponent        from './containers/home/home';

import { RootReducer } from './reducers';

import logger from 'redux-logger';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import {TodosReducer} from "./reducers/todos.reducer";
import {TodosSecondListReducer} from "./reducers/todosSecondList.reducer";
import {combineReducers} from "redux/index";

angular
    .module('app', [
        uiRouter,
        ngRedux,

        NavigationComponent.name,
        HomeComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<app></app>'
            })

            // Dashboard page to contain our goats list page
            .state('app.home', {
                url: '/home',
                template: '<home></home>'
            });

        $urlRouterProvider.otherwise('/home');


        $ngReduxProvider.createStoreWith(combineReducers({
            todos: TodosReducer,
            todos2: TodosSecondListReducer
        }), [logger]);
    })
    .component('app', AppComponent);
