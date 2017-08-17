'use strict';

export function RecipeService($resource) {
  'ngInject';
  var Recipe = {
    getAllRecipes() {
      return $resource('/api/recipes/').query().$promise;
    },
    getUserById(userId) {
      return $resource('/api/users/:id').get({id: userId}).$promise;
    },
    updateRecipe(recipe) {
      let updateResource = $resource('/api/recipes/:id', null,
        {
          update: { method: 'PUT' }
        });
      return updateResource.update({ id: recipe._id }, recipe).$promise;
    },
    createRecipe(recipe) {
      let createResource = $resource('/api/recipes', null,
        {
          create: { method: 'POST' }
        });
      return createResource.create(recipe).$promise;
    },
    deleteUser(user) {
      let deleteResource = $resource('/api/users/:id', null,
        {
          delete: { method: 'DELETE' }
        });
      return deleteResource.delete({ id: user._id },user).$promise;
    }
  };
  return Recipe;
}
