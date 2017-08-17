import angular from 'angular';

export class UpdateRecipeController {
  /*@ngInject*/
  constructor($uibModalInstance, $location ,Recipe, recipe) {
    this.Recipe = Recipe;
    this.$uibModalInstance = $uibModalInstance;
    this.recipe = recipe;
    this.location = $location;
	console.log(this.recipe);
	this.directions = [];
	for(var i=0;i<this.recipe.ingredients.length;i++){
		this.recipe.ingredients[i].amount = parseInt(this.recipe.ingredients[i].amount);
	}
	for(var i=0;i<this.recipe.directions.length;i++){
		this.directions.push({content:this.recipe.directions[i]});
	}
  }

  cancel() {
	this.$uibModalInstance.dismiss('cancel');
          //console.log(main); 
    
	 
  }
  addDirection(){
	  this.directions.push({"content":""});
  }
  addIngredient(){
	  this.recipe.ingredients.push({name:"",amount:1});
  }
  removeDirection(index){
	  this.directions.splice(index, 1);
  }
  removeIngredient(index){
	  this.recipe.ingredients.splice(index, 1);
  }
  submitForm() {
	 
	 this.recipe.directions = [];
	 var ingredients = [];
	 for(var i=0;i<this.directions.length;i++){
		 if(this.directions[i].content != "" && this.directions[i].content != undefined){
			 this.recipe.directions.push(this.directions[i].content);
		 }
	 }
	 for(var i=0;i<this.recipe.ingredients.length;i++){
		 if(this.recipe.ingredients[i] != "" && this.recipe.ingredients[i] != undefined){
			 ingredients.push(this.recipe.ingredients[i]);
		 }
	 }
	 this.recipe.ingredients = ingredients;
	 console.log(this.recipe);
    this.Recipe.updateRecipe(this.recipe)
      .then(result => {
        this.formInfo = 'Recipe successfully created!';
        //window.location = "/recipes";
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
}

export default angular.module('comp3705App.updateRecipeModal', [])
  .controller('updateRecipeController', UpdateRecipeController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
