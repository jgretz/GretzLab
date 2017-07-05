import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';

import {loadProjects, setActiveProject} from '../actions';
import {projectIdsAndTitlesSelector} from '../selectors';

import {List} from '../../shared/components';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentWillMount() {
    this.props.loadProjects();
  }

  handleClick(project) {
    this.props.setActiveProject(project.id);
  }

  render() {
    const {projects} = this.props;

    return (
      <List data={projects} onClick={this.handleClick} />
    );
  }
}

const mapStateToProps = state =>
({
  projects: projectIdsAndTitlesSelector(state),
});

export default connect(mapStateToProps, {loadProjects, setActiveProject})(ProjectList);
