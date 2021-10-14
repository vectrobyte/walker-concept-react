import './UserMenu.scss';

import React from 'react';

import UserIcon from '../../../../assets/user.svg';

type UserMenuProps = React.HTMLAttributes<HTMLElement>;

const UserMenu: React.FC<UserMenuProps> = () => {
  return (
    <div role="button" className="user-menu flex items-center justify-center px-8 hover:text-gray-800 transition-colors delay-100">
      <div className="mr-4">
        <img src={UserIcon} alt="" className="" />
      </div>
      <div className="">Harry Williamson</div>
    </div>
  );
};

export default UserMenu;
