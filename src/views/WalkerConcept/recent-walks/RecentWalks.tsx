import './RecentWalks.scss';

import React from 'react';

type RecentWalksProps = React.HTMLAttributes<HTMLElement>;

const RecentWalks: React.FC<RecentWalksProps> = (props) => {
  return (
    <div className="recent-walks">
      <div className="text-xl mb-14">
        <div className="recentwalks__c2b9ae28005c46908b5a00ec5990d237">Recent Walks</div>
      </div>
      <div className="mb-12 mb-3">
        <div className="text-5xl mb-3">1043</div>
        <div className="text-gray-500 mx-3">Miles in total</div>
      </div>

      <ol>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="flex items-center">
            <div className="rounded pill mr-2">12:1</div>
            <div className="text-sm">Miles</div>
          </div>
          <div className="">12/02/21</div>
        </li>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="flex items-center">
            <div className="rounded pill mr-2">12:1</div>
            <div className="text-sm">Miles</div>
          </div>
          <div className="">12/02/21</div>
        </li>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="flex items-center">
            <div className="rounded pill mr-2">12:1</div>
            <div className="text-sm">Miles</div>
          </div>
          <div className="">12/02/21</div>
        </li>
      </ol>
    </div>
  );
};

export default RecentWalks;
