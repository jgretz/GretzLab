import React from 'react';
import {Link} from 'react-router';

export default () => (
  <nav className="menu">
    <ul className="list-unstyled list-inline">
      <li><Link to="/">About</Link></li>
      <li>|</li>
      <li><Link to="/blog">Blog</Link></li>
      <li>|</li>
      <li><Link to="/lab">Lab</Link></li>
      <li>|</li>
      <li><Link to="/kitchen">Kitchen</Link></li>
      <li>|</li>
      <li><Link to="/talks">Talks</Link></li>
    </ul>
    <hr />
  </nav>
);
