import React from 'react';
import {connect} from 'react-redux';

import {pageSelector} from '../selectors';

import Watermark from './watermark';
import Social from './social';

const money = ({page}) => {
  if (!page) {
    return null;
  }

  const style = {backgroundImage: `url(${page.image.image})`};
  return (
    <div className="money" style={style}>
      <Watermark />
      <Social />
    </div>
  );
};

const mapStateToProps = (state, props) =>
({
  page: pageSelector(state, props),
});

export default connect(mapStateToProps)(money);
