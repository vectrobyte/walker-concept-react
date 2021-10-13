import './TopNav.scss';

import React from 'react';

import UserMenu from './user-menu/UserMenu';

type TopNavProps = React.HTMLAttributes<HTMLElement>;

const TopNav: React.FC<TopNavProps> = (props) => {
  return (
    <div className="top-nav flex items-center justify-between mb-8 -mt-2">
      <div className="text-2xl">New Routes</div>
      <UserMenu />
    </div>
  );
};

export default TopNav;
