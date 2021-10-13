import './LeftNav.scss';

import React from 'react';

import WalkerIcon from '../../../assets/walker.svg';

type LeftNavProps = React.HTMLAttributes<HTMLElement>;

const LeftNav: React.FC<LeftNavProps> = (props) => {
  return (
    <div className="left-nav">
      <div className="flex mb-12">
        <img src={WalkerIcon} alt="" className="mr-4 items-center"/>
        <div className="">Walker</div>
      </div>
      <ol className="menu">
        <li className="mb-6">
          <a href="" className="px-4">Targets</a>
        </li>
        <li className="mb-6">
          <a href="" className="px-4 text-gray-500">History</a>
        </li>
        <li className="mb-6">
          <a href="" className="px-4 text-gray-500">Overview</a>
        </li>
      </ol>
    </div>
  );
};

export default LeftNav;
