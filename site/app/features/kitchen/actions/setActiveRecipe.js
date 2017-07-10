
export const SET_ACTIVE_RECIPE = 'SET_ACTIVE_RECIPE';
export const setActiveRecipe = id =>
  ({
    type: SET_ACTIVE_RECIPE,
    payload: id,
  });
