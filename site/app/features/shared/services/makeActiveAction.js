export default token => id =>
  ({
    type: `SET_ACTIVE_${token}`,
    payload: id,
  });
