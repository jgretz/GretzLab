import React from 'react';
import {connect} from 'react-redux';
import {Trail} from 'react-spring';
import {TimingAnimation, Easing} from 'react-spring/dist/addons';

import Cell from './cell';

import {projectsSelector} from '../selectors';

const COLORS = Array.from(new Array(8), (_, index) => `color-${index + 1}`);

const cellStyle = x => ({
  marginTop: `${Math.max(x, 0)}%`,
});

const Table = ({projects}) => (
  <div className="table">
    <Trail
      from={{x: 100}}
      to={{x: 0}}
      delay={250}
      impl={TimingAnimation}
      config={{duration: 500, easing: Easing.elastic(2)}}
      keys={projects.map((p, i) => p.name || i)}
    >
      {projects.map((p, i) => ({x}) => (
        <Cell
          key={p.name}
          project={p}
          color={COLORS[i % COLORS.length]}
          style={cellStyle(x)}
        />
      ))}
    </Trail>
  </div>
);

const mapStateToProps = state => ({
  projects: projectsSelector(state),
});

export default connect(mapStateToProps)(Table);
