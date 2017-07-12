/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {activeEntrySelector} from '../selectors';
import {pageSelector} from '../../pages/selectors';

const detail = ({page, entry}) => {
  if (!entry && page) {
    return (
      <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
    );
  }

  if (!entry && !page) {
    return null;
  }

  return (
    <div className="content detail">
      <h1>{entry.title}</h1>
      <div>Posted: {moment(entry.createdAt).format('MMMM DD, YYYY h:mm a')}</div>
      <div>Tags: {entry.tags.map(t => t.name).join(', ')}</div>
      <div dangerouslySetInnerHTML={{__html: entry.text}} />
    </div>
  );
};

const mapStateToProps = (state, props) =>
  ({
    entry: activeEntrySelector(state),
    page: pageSelector(state, props),
  });

export default connect(mapStateToProps)(detail);
