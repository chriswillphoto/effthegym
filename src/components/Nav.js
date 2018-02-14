import React from 'react';

const Nav = props => {
  return (
    <div className="nav">
      <a href={props.address}>&#60; Back</a>
    </div>
  );
};

export default Nav;
