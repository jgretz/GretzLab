/* eslint-disable react/no-danger */
import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import {activePageSelector} from '../../pages/selectors';

const home = ({page}) => {
  if (!page) {
    return null;
  }

  return (
    <Row>
      <Col xs={12}>
        <Helmet>
          <title>GretzLab</title>
          <meta name="keywords" content="Gretz,gretz,Josh Gretz,Joshua Gretz,GretzLab" />
        </Helmet>
        <div dangerouslySetInnerHTML={{__html: page.text}} className="content" />
      </Col>
    </Row>
  );
};

const mapStateToProps = state =>
  ({
    page: activePageSelector(state),
  });

export default connect(mapStateToProps)(home);
