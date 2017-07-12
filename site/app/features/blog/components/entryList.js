import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadEntries, setActiveEntry} from '../actions';
import {entryIdAndTitlesSelector} from '../selectors';

import {List} from '../../shared/components';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadEntries();
  }

  handleClick(entry) {
    this.props.setActiveEntry(entry.id);
  }

  render() {
    const {entries} = this.props;

    return (
      <List data={entries} onClick={this.handleClick} />
    );
  }
}

const mapStateToProps = state =>
  ({
    entries: entryIdAndTitlesSelector(state),
  });

export default connect(mapStateToProps, {loadEntries, setActiveEntry})(ProjectList);
