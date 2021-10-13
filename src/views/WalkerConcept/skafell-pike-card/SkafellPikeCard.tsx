import './SkafellPikeCard.scss';

import React from 'react';

type SkafellPikeCardProps = React.HTMLAttributes<HTMLElement>;

const SkafellPikeCard: React.FC<SkafellPikeCardProps> = (props) => {
  const data = {
    height: 1200,
    distance: 824,
    difficulty: 'EASY'
  };

  return (
    <div className="skafell-pike-card text-white p-8">
      <div className="text-lg mb-4">Skafell Pike</div>
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

export default SkafellPikeCard;
