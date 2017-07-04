import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {pageSelector} from '../../pages/selectors';

const home = ({page}) => {
  if (!page) {
    return null;
  }

  return (
    <Row>
      <Col xs={10} xsOffset={1}>
        <div dangerouslySetInnerHTML={{__html: page.text}} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state, props) =>
({
  page: pageSelector(state, props),
});

export default connect(mapStateToProps)(home);
