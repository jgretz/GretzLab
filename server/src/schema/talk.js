import {TEXT, MANY_TO_MANY} from 'node-bits';

export default {
  title: String,
  active: Boolean,
  github: String,
  text: TEXT,
};

export const talkConference = {
  model: 'talk',
  references: 'conference',
  type: MANY_TO_MANY,
};

export const talkTag = {
  model: 'talk',
  references: 'tag',
  type: MANY_TO_MANY,
};
