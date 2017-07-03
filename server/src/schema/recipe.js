import {TEXT, MANY_TO_MANY, MANY_TO_ONE} from 'node-bits';

export default {
  title: String,
  active: Boolean,
  text: TEXT,
};

export const recipeCategory = {
  model: 'recipe',
  references: 'category',
  type: MANY_TO_ONE,
};

export const recipeTag = {
  model: 'recipe',
  references: 'tag',
  type: MANY_TO_MANY,
};
