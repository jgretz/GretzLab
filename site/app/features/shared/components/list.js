import React from 'react';

export default ({data, onClick, className}) => {
  const handleClick = item => () => onClick(item);
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
