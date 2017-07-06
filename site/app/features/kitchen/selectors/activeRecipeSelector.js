import {createSelector} from 'reselect';
import allRecipesSelector from './allRecipesSelector';
import activeRecipeIdSelector from './activeRecipeIdSelector';

export default createSelector(allRecipesSelector, activeRecipeIdSelector,
  (recipes, id) => recipes.find(r => r.id === id));
