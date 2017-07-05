import React from 'react';
import {Row, Col} from 'react-bootstrap';

import ProjectList from './projectList';
import ProjectDetail from './detail';

export default () => (
  <Row>
    <Col xs={2}>
      <ProjectList />
    </Col>
    <Col xs={10}>
      <ProjectDetail />
    </Col>
  </Row>
);
