/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';

import {activeProjectSelector} from '../selectors';
import {pageSelector} from '../../pages/selectors';

const detail = ({page, project}) => {
  if (!project && page) {
    return (
      <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
    );
  }

  if (!project && !page) {
    return null;
  }

  return (
    <div className="content detail">
      <h1>{project.title}</h1>
      <div><a href={project.github} target="_blank"><i className="fa fa-github" /> {project.github}</a></div>
      <div>Tags: {project.tags.map(t => t.name)}</div>
      <div dangerouslySetInnerHTML={{__html: project.text}} />
    </div>
  );
};

const mapStateToProps = (state, props) =>
({
  project: activeProjectSelector(state),
  page: pageSelector(state, props),
});

export default connect(mapStateToProps)(detail);
