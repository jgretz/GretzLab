import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {List} from '../components';

class DataList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadAction();
  }

  render() {
    const {data} = this.props;

    return (
      <List data={data} />
    );
  }
}

export default (loadAction, dataSelector) => {
  const mapStateToProps = state => ({data: dataSelector(state)});

  return connect(mapStateToProps, {loadAction})(DataList);
};
