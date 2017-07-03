import {TEXT, MANY_TO_MANY} from 'node-bits';

export default {
  title: String,
  active: Boolean,
  github: String,
  text: TEXT,
};

export const projectTag = {
  model: 'project',
  references: 'tag',
  type: MANY_TO_MANY,
};
