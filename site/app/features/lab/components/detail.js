/* eslint-disable react/no-danger */
import React from 'react';
import {activeProjectSelector} from '../selectors';
import {makeDataDetail} from '../../shared/services';

const makeDetailDiv = project => (
  <div className="content detail">
    <h1>{project.title}</h1>
    <div><a href={project.github} target="_blank"><i className="fa fa-github" /> {project.github}</a></div>
    <div>Tags: {project.tags.map(t => t.name).join(', ')}</div>
    <div dangerouslySetInnerHTML={{__html: project.text}} />
  </div>
);

export default makeDataDetail(activeProjectSelector, makeDetailDiv);
