/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';

import {activePageSelector} from '../../pages/selectors';

const detail = ({page, item, makeDetailDiv, makeDefaultDiv}) => {
  if (!item && !page) {
    return null;
  }

  if (!item && page) {
    if (makeDefaultDiv) {
      return makeDefaultDiv(page);
    }

    return (
      <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
    );
  }

  return makeDetailDiv(item);
};


export default (activeItemSelector, makeDetailDiv, makeDefaultDiv) => {
  const mapStateToProps = state =>
    ({
      page: activePageSelector(state),
      item: activeItemSelector(state),
      makeDetailDiv,
      makeDefaultDiv,
    });

  return connect(mapStateToProps)(detail);
};

