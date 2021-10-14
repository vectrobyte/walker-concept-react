import './LeftNav.scss';

import React from 'react';

import WalkerIcon from '../../../assets/walker.svg';

type LeftNavProps = React.HTMLAttributes<HTMLElement>;

const LeftNav: React.FC<LeftNavProps> = () => {
  return (
    <div className="left-nav">
      <div className="flex mb-8 lg:mb-12">
        <img src={WalkerIcon} alt="" className="mr-2 lg:mr-4 items-center"/>
        <div className="">Walker</div>
      </div>
      <ol className="menu">
        <li className="mb-6">
          <a href="" className="px-4 hover:text-gray-800 transition-colors delay-100">Targets</a>
        </li>
        <li className="mb-6">
          <a href="" className="px-4 text-gray-500 hover:text-gray-800 transition-colors delay-100">History</a>
        </li>
        <li className="mb-6">
          <a href="" className="px-4 text-gray-500 hover:text-gray-800 transition-colors delay-100">Overview</a>
        </li>
      </ol>
    </div>
  );
};

export default LeftNav;
