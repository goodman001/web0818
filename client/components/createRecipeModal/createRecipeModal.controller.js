import angular from 'angular';

export class CreateRecipeController {
  /*@ngInject*/
  constructor($uibModalInstance, $location ,Recipe, recipe) {
    this.Recipe = Recipe;
    this.$uibModalInstance = $uibModalInstance;
    this.recipe = recipe;
    this.location = $location;
	this.directions = [{content:""},{content:""}],
	this.ingredients = [{name:"",amount:1}]
  }

  cancel() {
	this.$uibModalInstance.dismiss('cancel');
          //console.log(main); 
    
	 
  }
  addDirection(){
	  this.directions.push({content:""});
  }
  addIngredient(){
	  this.ingredients.push({name:"",amount:1});
  }
  removeDirection(index){
	  this.directions.splice(index, 1);
  }
  removeIngredient(index){
	  this.ingredients.splice(index, 1);
  }
  submitForm() {
	 
	 this.recipe.directions = [];
	 this.recipe.ingredients = this.ingredients;
	 for(var i=0;i<this.directions.length;i++){
		 this.recipe.directions.push(this.directions[i].content);
	 }
	  console.log(this.recipe);
    this.Recipe.createRecipe(this.recipe)
      .then(result => {
        this.formInfo = 'Recipe successfully created!';
        window.location = "/recipes";
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
}

export default angular.module('comp3705App.createRecipeModal', [])
  .controller('createRecipeController', CreateRecipeController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
