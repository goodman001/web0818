import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './recipediv.routes';
const uiBootstrap = require('angular-ui-bootstrap');
import recipe from '../../components/recipeService/recipe.module';

export class RecipedivController {
  /*@ngInject*/
  constructor($http, $uibModal, Recipe) {
    this.$http = $http;
    this.Recipe = Recipe;
    this.$uibModal = $uibModal;
    this.setData();
    this.getUserData();
  }

  setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }

  getUserData() {
    this.Recipe.getAllRecipes()
      .then(response => {
		console.log(response);
        this.recipes = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
  deleteUser(user,index) {
    this.Recipe.deleteUser(user)
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
  updateRecipe(recipe) {
    this.$uibModal.open({
      template: require('../../components/updateRecipeModal/updateRecipeModal.html'),
      controller: 'updateRecipeController as updateRecipeController',
      resolve: {
        recipe: () => recipe
      }
    });
  }
  viewDetail(recipe){
	  console.log("recipeopen");
	  this.$uibModal.open({
      template: require('../../components/viewRecipeModal/viewRecipeModal.html'),
      controller: 'viewRecipeController as viewRecipeController',
      resolve: {
        recipe: () => recipe
      }
    });
  }
  createRecipe(recipe) {
	console.log("abc");
    this.$uibModal.open({
      template: require('../../components/createRecipeModal/createRecipeModal.html'),
      controller: 'createRecipeController as createRecipeController',
      resolve: {
        recipe: () => recipe
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


export default angular.module('comp3705App.recipediv', [ngRoute, uiBootstrap, recipe])
 .config(routing)
  .component('recipediv', {
    template: require('./recipediv.html'),
    controller: RecipedivController,
    controllerAs: 'recipedivController'
 })
  .filter('Square', SquareFilter)
  .name;
