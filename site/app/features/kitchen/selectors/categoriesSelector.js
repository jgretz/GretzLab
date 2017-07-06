import {createSelector} from 'reselect';
import allRecipesSelector from './allRecipesSelector';

const HARD_SORT = ['Appetizers', 'Sides', 'Entrees', 'Desserts'];

export default createSelector(allRecipesSelector,
  recipes => recipes
    .filter(r => r.categoryId)
    .groupBy(r => r.categoryId)
    .map((value, key) => ({
      id: key,
      name: value.first().category.name,
      recipes: value,
    }))
    .toList()
    .sortBy(c => HARD_SORT.indexOf(c.name))
    .toJS()
);
