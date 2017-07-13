export const SET_ACTIVE_LOCATION = 'SET_ACTIVE_LOCATION';

const showHome = page => page.length === 0 || page === '#';

export const setActiveLocation = location => {
  const parts = location.pathname.split('/').filter(p => p.length > 0);
  const page = parts.length > 0 ? parts[0] : '';
  const title = parts.length > 1 ? parts[1] : '';

  return ({
    type: SET_ACTIVE_LOCATION,
    payload: {
      page: showHome(page) ? 'home' : page,
      title,
    },
  });
};
