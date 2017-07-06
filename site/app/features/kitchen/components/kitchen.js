import React from 'react';
import {Row, Col} from 'react-bootstrap';

import RecipeList from './recipeList';
import RecipeDetail from './detail';

export default () => (
  <Row>
    <Col xs={2}>
      <RecipeList />
    </Col>
    <Col xs={10}>
      <RecipeDetail />
    </Col>
  </Row>
);
