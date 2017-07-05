import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadProjects} from '../actions';
import {projectIdsAndTitlesSelector} from '../selectors';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
    const {projects} = this.props;

    return (
      <ul>
        {
        projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))
        }
      </ul>
    );
  }
}

const mapStateToProps = state =>
({
  projects: projectIdsAndTitlesSelector(state),
});

export default connect(mapStateToProps, {loadProjects})(ProjectList);
