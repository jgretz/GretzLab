import {get} from 'truefit-react-utils';

export const LOAD_RECIPES = 'LOAD_RECIPES';
export const loadRecipes = () =>
  ({
    type: LOAD_RECIPES,
    payload: get('recipe?expand=tag,category'),
  });
