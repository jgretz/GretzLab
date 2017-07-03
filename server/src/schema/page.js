import {TEXT, MANY_TO_ONE} from 'node-bits';

export default {
  name: String,
  text: TEXT,
};

export const pageImage = {
  model: 'page',
  references: 'image',
  type: MANY_TO_ONE,
};
