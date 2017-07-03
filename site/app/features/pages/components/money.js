import React from 'react';
import {connect} from 'react-redux';

import {pageSelector} from '../selectors';

const money = ({page}) => {
  if (!page) {
    return null;
  }

  const style = {backgroundImage: `url(${page.image.image})`};
  return (
    <div className="money" style={style}>
      <div className="watermark">Gretz Lab</div>
    </div>
  );
};

const mapStateToProps = (state, props) =>
({
  page: pageSelector(state, props),
});

export default connect(mapStateToProps)(money);
