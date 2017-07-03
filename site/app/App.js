import {Component} from 'react';
import {connect} from 'react-redux';

import {loadPages} from './features/pages/actions';

class App extends Component {
  componentWillMount() {
    this.props.loadPages();
  }

  render() {
    return this.props.children;
  }
}

export default connect(null, {loadPages})(App);
