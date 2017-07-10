import React from 'react';
import {Row, Col} from 'react-bootstrap';

import TalkList from './talkList';
import TalkDetail from './detail';

export default () => (
  <Row>
    <Col xs={2}>
      <TalkList />
    </Col>
    <Col xs={10}>
      <TalkDetail />
    </Col>
  </Row>
);
