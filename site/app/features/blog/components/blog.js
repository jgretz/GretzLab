import React from 'react';
import {Row, Col} from 'react-bootstrap';

import EntryList from './entryList';
import EntryDetail from './detail';

export default () => (
  <Row>
    <Col xs={2}>
      <EntryList />
    </Col>
    <Col xs={10}>
      <EntryDetail />
    </Col>
  </Row>
);
