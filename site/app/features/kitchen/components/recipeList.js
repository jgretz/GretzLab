import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadRecipes} from '../actions';
import {categoriesSelector} from '../selectors';

import {List} from '../../shared/components';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadRecipes();
  }

  renderCategory(category) {
    return (
      <div key={category.id}>
        <h1>{category.name}</h1>
        <List data={category.recipes} className=" " />
      </div>
    );
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="content-list">
        {categories.map(this.renderCategory)}
      </div>
    );
  }
}

const mapStateToProps = state =>
  ({
    categories: categoriesSelector(state),
  });

export default connect(mapStateToProps, {loadRecipes})(RecipeList);
