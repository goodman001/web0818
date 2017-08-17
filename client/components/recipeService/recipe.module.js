'use strict';

import angular from 'angular';
import {
  RecipeService
} from './recipe.service';
import resource from 'angular-resource';

export default angular.module('comp3705App.reciped', [resource])
  .factory('Recipe', RecipeService)
  .name;
