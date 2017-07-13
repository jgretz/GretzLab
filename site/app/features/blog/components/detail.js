/* eslint-disable react/no-danger */
import React from 'react';
import moment from 'moment';
import {activeEntrySelector} from '../selectors';
import {makeDataDetail} from '../../shared/services';

const makeDetailDiv = entry => (
  <div className="content detail">
    <h1>{entry.title}</h1>
    <div>Posted: {moment(entry.createdAt).format('MMMM DD, YYYY h:mm a')}</div>
    <div>Tags: {entry.tags.map(t => t.name).join(', ')}</div>
    <div dangerouslySetInnerHTML={{__html: entry.text}} />
  </div>
);

export default makeDataDetail(activeEntrySelector, makeDetailDiv);
