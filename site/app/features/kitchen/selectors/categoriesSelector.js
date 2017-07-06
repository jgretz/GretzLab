import {createSelector} from 'reselect';
import allRecipesSelector from './allRecipesSelector';

const HARD_SORT = ['Appetizers', 'Sides', 'Entrees', 'Desserts'];

export default createSelector(allRecipesSelector,
  recipes => recipes
    .filter(r => r.categoryId)
    .map(r => ({id: r.category.id, name: r.category.name}))
    .sortBy(c => HARD_SORT.indexOf(c.name))
    .toOrderedSet()
    .map(c => ({
      ...c,
      recipes: recipes
              .filter(r => r.categoryId === c.id)
              .sortBy(r => r.title)
              .toJS(),
    }))
    .toJS()
);
