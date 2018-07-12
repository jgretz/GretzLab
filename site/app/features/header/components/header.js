import React from 'react';
import {Icon} from 'semantic-ui-react';
import {imageSrc} from '../../shared/services';

export default () => (
  <div className="header">
    <a href="https://www.joshgretz.io" target="_blank" alt="About">
      <Icon name="qq" />
    </a>
    <img src={imageSrc('/logo-bot.png')} alt="logo" />
    <a href="https://www.twitter.com/joshgretz" target="_blank" alt="Twitter">
      <Icon name="twitter" />
    </a>
  </div>
);
