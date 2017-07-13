import React from 'react';
import {connect} from 'react-redux';

import {activePageSelector} from '../selectors';

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

const mapStateToProps = state =>
  ({
    page: activePageSelector(state),
  });

export default connect(mapStateToProps)(money);
