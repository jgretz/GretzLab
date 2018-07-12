import React from 'react';
import {Icon} from 'semantic-ui-react';
import {imageSrc} from '../../shared/services';
import {TIMEFRAME} from '../../shared/constants';

const timeframeIconMap = {
  [TIMEFRAME.past]: 'history',
  [TIMEFRAME.present]: 'birthday cake',
  [TIMEFRAME.future]: 'binoculars',
};

const timeframeForProject = ({timeframe}) => (
  <div className="timeframe">
    <Icon name={timeframeIconMap[timeframe]} />
    <span>{timeframe}</span>
  </div>
);

export default ({project, color, style}) => (
  <div className={['cell', color].join(' ')} style={style}>
    <div
      className="image"
      style={{backgroundImage: `url('${imageSrc(`/${project.image}`)}')`}}
    />
    <div className="content">
      <a href={project.link} target="_blank">
        <h2>{project.name}</h2>
      </a>
      {timeframeForProject(project)}
      <div className="description">{project.description}</div>
    </div>
  </div>
);
