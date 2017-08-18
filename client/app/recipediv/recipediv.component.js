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
  showuser(){
    window.location = "/users";
  }
  showre(){
    window.location = "/recipes";
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
  deleteRecipe(recipe,index) {
    this.Recipe.deleteRecipe(recipe)
      .then(response => {
          console.log(index);
          console.log(this.recipes);
          console.log(response);
          this.recipes.splice(index,1);
		  this.formInfo = 'recipe delete successfully!';
		  
          console.log(this.recipes);
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
  viewReviewDetail(recipe){
    console.log("view detail");
    this.$uibModal.open({
      template: require('../../components/viewReviewModal/viewReviewModal.html'),
      controller: 'viewReviewController as viewReviewController',
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
