import React from 'react';

export default ({data, onClick}) => {
  const handleClick = item => () => onClick(item);

  return (
    <div className="content-list">
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
