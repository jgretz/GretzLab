import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default () => (
  <Row className="footer-container">
    <Col xs={10} xsOffset={1}>
      <ul className="list-unstyled list-inline pull-right">
        <li><a href="https://twitter.com/joshgretz" target="_blank" className="fa fa-twitter" /></li>
        <li>|</li>
        <li><a href="https://www.linkedin.com/in/joshgretz" target="_blank" className="fa fa-linkedin" /></li>
        <li>|</li>
        <li><a href="https://github.com/jgretz" target="_blank" className="fa fa-github" /></li>
      </ul>
    </Col>
  </Row>
);
