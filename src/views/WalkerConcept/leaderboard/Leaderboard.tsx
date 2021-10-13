import './Leaderboard.scss';

import React from 'react';

import VectorBG from './vector-bg.png';

type LeaderboardProps = React.HTMLAttributes<HTMLElement>;

const Leaderboard: React.FC<LeaderboardProps> = () => {
  return (
    <div className="leaderboard relative overflow-hidden p-8 h-full">
      <div className="text-lg text-2xl mb-12">Leaderboard</div>

      <ol>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="text-sm">John Smith</div>
          <div className="">12/02/21</div>
        </li>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="text-sm">John Smith</div>
          <div className="">12/02/21</div>
        </li>
        <li className="border rounded-2xl p-4 flex items-center justify-between mb-3 bg-white">
          <div className="text-sm">John Smith</div>
          <div className="">12/02/21</div>
        </li>
      </ol>

      <div className="absolute bottom-0 left-0 right-0">
        <img src={VectorBG} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Leaderboard;
