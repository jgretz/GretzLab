import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadTalks, setActiveTalk} from '../actions';
import {talkIdAndTitlesSelector} from '../selectors';

import {List} from '../../shared/components';

class TalkList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadTalks();
  }

  handleClick(talk) {
    this.props.setActiveTalk(talk.id);
  }

  render() {
    const {talks} = this.props;

    return (
      <List data={talks} onClick={this.handleClick} />
    );
  }
}

const mapStateToProps = state =>
  ({
    talks: talkIdAndTitlesSelector(state),
  });

export default connect(mapStateToProps, {loadTalks, setActiveTalk})(TalkList);
