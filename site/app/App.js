import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import Spinner from 'react-spinkit';

import {loadPages} from './features/pages/actions';
import {Money} from './features/pages/components';
import {Menu} from './features/menu/components';
import {Footer} from './features/shared/components';

import {allPagesSelector} from './features/pages/selectors';

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadPages();
  }

  findName() {
    let {location: {pathname}} = this.props;
    pathname = pathname.replace('/', '');

    if (!pathname || pathname.length === 0 || pathname === '#') {
      return 'home';
    }

    return pathname;
  }

  renderChildren(name) {
    return React.Children.map(this.props.children, child => React.cloneElement(child, {name}));
  }

  renderLoading() {
    return (
      <Spinner name="double-bounce" />
    );
  }

  render() {
    const {pages} = this.props;
    if (pages.size === 0) {
      return this.renderLoading();
    }

    // render page
    const name = this.findName();
    return (
      <div className="site">
        <Money name={name} />
        <Menu />

        {this.renderChildren(name)}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state =>
({
  pages: allPagesSelector(state),
});

export default connect(mapStateToProps, {loadPages})(App);
