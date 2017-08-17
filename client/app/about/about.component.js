import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './about.routes';

export class AboutController {
  /*@ngInject*/
  constructor($routeParams) {
    this.$routeParams = $routeParams;
    this.setData();
  }

  setData() {
    this.somethingToPrint = this.$routeParams.somethingToPrint;
    if(this.somethingToPrint) {
      this.valueEntered = true;
    } else {
      this.valueEntered = false;
    }
  }
}

export default angular.module('comp3705App.about', [ngRoute])
  .config(routing)
  .component('about', {
    template: require('./about.html'),
    controller: AboutController,
    controllerAs: 'aboutController'
  })
  .name;
