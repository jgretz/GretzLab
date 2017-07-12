import {get} from 'truefit-react-utils';

export default (token, url, expand) =>
  ({
    type: `LOAD_${token}`,
    payload: get(`${url}?expand=${['tag', ...(expand || [])].join(',')}`),
  });
