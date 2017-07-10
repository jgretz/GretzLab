/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';

import {activeRecipeSelector} from '../selectors';
import {pageSelector} from '../../pages/selectors';

const detail = ({page, recipe}) => {
  if (!recipe && page) {
    return (
      <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
    );
  }

  if (!recipe && !page) {
    return null;
  }

  return (
    <div className="content detail">
      <h1>{recipe.title}</h1>
      <div>Tags: {recipe.tags.map(t => t.name).join(', ')}</div>
      <div dangerouslySetInnerHTML={{__html: recipe.text}} />
    </div>
  );
};

const mapStateToProps = (state, props) =>
  ({
    recipe: activeRecipeSelector(state),
    page: pageSelector(state, props),
  });

export default connect(mapStateToProps)(detail);
