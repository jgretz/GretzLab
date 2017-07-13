import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import Spinner from 'react-spinkit';

import {loadPages} from './features/pages/actions';
import {Money} from './features/pages/components';
import {Menu} from './features/menu/components';

import {allPagesSelector} from './features/pages/selectors';

import {setActiveLocation} from './features/shared/actions';

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.setActiveLocation(props.location);
  }

  componentWillMount() {
    this.props.loadPages();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.setActiveLocation(newProps.location);
    }
  }

  setActiveLocation(location) {
    this.props.setActiveLocation(location);
  }

  // render
  renderLoading() {
    return (
      <div className="loading">
        <Spinner name="double-bounce" />
      </div>
    );
  }

  render() {
    const {pages} = this.props;
    if (pages.size === 0) {
      return this.renderLoading();
    }

    // render page
    return (
      <div className="site">
        <Money />
        <Menu />

        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state =>
  ({
    pages: allPagesSelector(state),
  });

export default connect(mapStateToProps, {loadPages, setActiveLocation})(App);
