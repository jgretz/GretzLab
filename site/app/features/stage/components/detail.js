/* eslint-disable react/no-danger */
import React from 'react';
import {activeTalkSelector} from '../selectors';
import {makeDataDetail} from '../../shared/services';

const makeDetailDiv = talk => (
  <div className="content detail">
    <h1>{talk.title}</h1>
    <div><a href={talk.github} target="_blank"><i className="fa fa-github" /> {talk.github}</a></div>
    <div>Tags: {talk.tags.map(t => t.name).join(', ')}</div>
    <div>Conferences: {talk.conferences.map(t => t.name).join(', ')}</div>
    <div dangerouslySetInnerHTML={{__html: talk.text}} />
  </div>
);

export default makeDataDetail(activeTalkSelector, makeDetailDiv);

