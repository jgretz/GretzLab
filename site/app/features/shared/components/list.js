import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {activeLocationSelector} from '../selectors';
import {replaceAll} from '../../shared/services';

const list = ({data, className, location}) => {
  const handleClick = item => () => {
    browserHistory.push(`/${location.page}/${replaceAll(item.title, ' ', '-')}`);
  };

  const actualClassName = className || 'content-list';
  return (
    <div className={actualClassName}>
      <ul>
        {
          data.map(item => (
            <li key={item.id} onClick={handleClick(item)}>
              <span>{item.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state =>
  ({
    location: activeLocationSelector(state),
  });

export default connect(mapStateToProps)(list);
