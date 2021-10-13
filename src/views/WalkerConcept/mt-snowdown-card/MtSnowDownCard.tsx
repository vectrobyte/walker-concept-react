import './MtSnowDownCard.scss';

import React from 'react';

type MtSnowDownCardProps = React.HTMLAttributes<HTMLElement>;

const MtSnowDownCard: React.FC<MtSnowDownCardProps> = () => {
  const data = {
    height: 1200,
    distance: 824,
    difficulty: 'EASY'
  };

  return (
    <div className="mt-snowdon-card text-white p-8">
      <div className="text-lg text-2xl mb-8">Mount Snowdon</div>
      <ol>
        <li className="flex items-center justify-between mb-3 text-sm">
          <div className="">Height:</div>
          <div className="">{data.height || 0}m</div>
        </li>
        <li className="flex items-center justify-between mb-3 text-sm">
          <div className="">Distance</div>
          <div className="">{data.distance || 0}m</div>
        </li>
        <li className="flex items-center justify-between mb-3 text-sm">
          <div className="">Difficulty</div>
          <div className="capitalize">{data.difficulty.toLowerCase()}</div>
        </li>
      </ol>
    </div>
  );
};

export default MtSnowDownCard;
