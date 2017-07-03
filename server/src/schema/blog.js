import {TEXT, MANY_TO_MANY} from 'node-bits';

export default {
  title: String,
  active: Boolean,
  text: TEXT,
};

export const blogTag = {
  model: 'blog',
  references: 'tag',
  type: MANY_TO_MANY,
};
