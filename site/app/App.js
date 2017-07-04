import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadPages} from './features/pages/actions';
import {Money} from './features/pages/components';
import {Menu} from './features/menu/components';

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

  render() {
    const name = this.findName();
    return (
      <div>
        <Money name={name} />
        <Menu />

        {this.renderChildren(name)}
      </div>
    );
  }
}

export default connect(null, {loadPages})(App);
