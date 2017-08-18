import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';
const uiBootstrap = require('angular-ui-bootstrap');
import user from '../../components/userService/user.module';

export class MainController {
  /*@ngInject*/
  constructor($http, $uibModal, User) {
    this.$http = $http;
    this.User = User;
    this.$uibModal = $uibModal;
    this.setData();
    this.getUserData();
  }

  setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }
  showuser(){
    window.location = "/users";
  }
  showre(){
    window.location = "/recipes";
  }
  getUserData() {
    this.User.getAllUsers()
      .then(response => {
        this.users = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
  deleteUser(user,index) {
    this.User.deleteUser(user)
      .then(response => {
          console.log(index);
          console.log(this.users);
          console.log(response);
          this.users.splice(index,1);
		  this.formInfo = 'User delete successfully!';
		  
          console.log(this.users);
        }

      )
      .catch(error => {
        console.error(error);
		this.formError = err.toString();
      });
  }
  updateUser(user) {
    this.$uibModal.open({
      template: require('../../components/updateUserModal/updateUserModal.html'),
      controller: 'updateUserController as updateUserController',
      resolve: {
        user: () => user
      }
    });
  }

  createUser(user) {
    this.$uibModal.open({
      template: require('../../components/createUserModal/createUserModal.html'),
      controller: 'createUserController as createUserController',
      resolve: {
        user: () => user,
		users:() =>this.users
      }
    });
  }
	
   $onInit() {

   }
}

export function SquareFilter() {
  var squareFunction = function(value) {
    return value * value;
  };
  return squareFunction;
}


export default angular.module('comp3705App.main', [ngRoute, uiBootstrap, user])
 .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
 })
  .filter('Square', SquareFilter)
  .name;
