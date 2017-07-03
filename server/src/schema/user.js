import {PASSWORD} from 'node-bits';

// entities
export const user = {
  email: String,
  password: {type: PASSWORD, size: 300},
};

// indexes
export const userUnique = {
  model: 'user',
  fields: ['email'],
  unique: true,
};
