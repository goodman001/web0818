import angular from 'angular';

export class  ViewReviewController{
  /*@ngInject*/
  constructor($uibModalInstance, $location ,Recipe,User, recipe) {
    this.Recipe = Recipe;
    this.$uibModalInstance = $uibModalInstance;
    this.recipe = recipe;
    this.location = $location;
    this.User = User;
    this.getData();
    this.getUserData();
	  console.log();
  }

  cancel() {
	this.$uibModalInstance.dismiss('cancel');
          //console.log(main); 
  }
  getData() {
    this.Recipe.getRecipeById(this.recipe._id)
      .then(response => {
		console.log(response);
        this.reviews = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
  getUserData() {
    this.User.getAllUsers()
      .then(response => {
        this.users = response;
      console.log(this.users);
      })
      .catch(error => {
        console.error(error);
      });
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
  deleteReivew(index){
	 //console.log(this.recipe.reviews);
	 this.recipe.reviews.splice(index, 1)
     this.Recipe.updateRecipe(this.recipe)
      .then(result => {
        this.formInfo = 'Reviews successfully delete!';
        //window.location = "/recipes";
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
  createForm(){
    console.log(this.review);
    this.review.user = "";
    for(var i=0;i<this.users.length;i++){
      if(this.userid == this.users[i]._id){
        this.review.user = this.users[i].username;
      }
    }
    console.log(this.review);
    this.recipe.reviews.push(this.review);
    this.Recipe.createReview(this.recipe,this.review)
      .then(result => {
        this.formInfo = 'Recipe successfully created!';
        //window.location = "/recipes";
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
  updateForm(){
    console.log(this.recipe.reviews);
     this.Recipe.updateRecipe(this.recipe)
      .then(result => {
        this.formInfo = 'Reviews successfully update!';
        //window.location = "/recipes";
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
}

export default angular.module('comp3705App.viewReviewModal', [])
  .controller('viewReviewController', ViewReviewController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
