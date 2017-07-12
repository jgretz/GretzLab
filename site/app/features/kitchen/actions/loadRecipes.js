import {RECIPE} from '../../constants';
import {makeLoadAction} from '../../shared/services';

export const loadRecipes = () => makeLoadAction(RECIPE, 'recipe', ['category']);
