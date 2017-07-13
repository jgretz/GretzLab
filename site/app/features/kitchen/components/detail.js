/* eslint-disable react/no-danger */
import React from 'react';
import {activeRecipeSelector} from '../selectors';
import {makeDataDetail} from '../../shared/services';

const makeDetailDiv = recipe => (
  <div className="content detail">
    <h1>{recipe.title}</h1>
    <div>Tags: {recipe.tags.map(t => t.name).join(', ')}</div>
    <div dangerouslySetInnerHTML={{__html: recipe.text}} />
  </div>
);

export default makeDataDetail(activeRecipeSelector, makeDetailDiv);
