import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './index.routes';
const uiBootstrap = require('angular-ui-bootstrap');
import user from '../../components/userService/user.module';

export class IndexController {
  /*@ngInject*/
  constructor($http, $uibModal, User) {
    this.$http = $http;
    this.User = User;
    this.$uibModal = $uibModal;
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


export default angular.module('comp3705App.index', [ngRoute, uiBootstrap, user])
 .config(routing)
  .component('index', {
    template: require('./index.html'),
    controller: IndexController,
    controllerAs: 'indexController'
 })
  .filter('Square', SquareFilter)
  .name;
