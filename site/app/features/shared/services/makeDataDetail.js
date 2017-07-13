/* eslint-disable react/no-danger */
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {activePageSelector} from '../../pages/selectors';
import replaceAll from './replaceAll';

// helpers
const title = (page, item) => {
  let title = `GretzLab - ${_.upperFirst(page.name)}`;
  if (item) {
    title = `${title} - ${item.title}`;
  }

  return title;
};

const link = (page, item) => {
  let url = `http://www.gretzlab.com/${page.name}`;
  if (item) {
    url = `${url}/${replaceAll(item.title, ' ', '-')}`;
  }

  return url;
};

const keywords = (page, item) => {
  let keywords = 'Gretz,gretz,Josh Gretz,Joshua Gretz,GretzLab';
  if (item) {
    keywords = `${item.tags.map(t => t.name).join(',')},${keywords}`;
  }

  return keywords;
};

const helmet = (page, item) => (
  <Helmet>
    <title>{title(page, item)}</title>
    <meta name="keywords" content={keywords(page, item)} />
    <link rel="canonical" href={link(page, item)} />
  </Helmet>
);

const defaultDiv = page => (
  <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
);

// detail component
const detail = ({page, item, makeDetailDiv, makeDefaultDiv}) => {
  if (!page) {
    return null;
  }

  const render = item ? makeDetailDiv(item) : makeDefaultDiv ? makeDefaultDiv(page) : defaultDiv(page); // eslint-disable-line

  return (
    <div>
      {helmet(page, item)}
      <div>
        {render}
      </div>
    </div>
  );
};

// generator
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

