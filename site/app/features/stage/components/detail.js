/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';

import {activeTalkSelector} from '../selectors';
import {pageSelector} from '../../pages/selectors';

const detail = ({page, talk}) => {
  if (!talk && page) {
    return (
      <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
    );
  }

  if (!talk && !page) {
    return null;
  }

  return (
    <div className="content detail">
      <h1>{talk.title}</h1>
      <div><a href={talk.github} target="_blank"><i className="fa fa-github" /> {talk.github}</a></div>
      <div>Tags: {talk.tags.map(t => t.name).join(', ')}</div>
      <div>Conferences: {talk.conferences.map(t => t.name).join(', ')}</div>
      <div dangerouslySetInnerHTML={{__html: talk.text}} />
    </div>
  );
};

const mapStateToProps = (state, props) =>
  ({
    talk: activeTalkSelector(state),
    page: pageSelector(state, props),
  });

export default connect(mapStateToProps)(detail);
