import './WalkerConcept.scss';

import React from 'react';

import Leaderboard from './leaderboard/Leaderboard';
import LeftNav from './left-nav/LeftNav';
import MtSnowDownCard from './mt-snowdown-card/MtSnowDownCard';
import RecentWalks from './recent-walks/RecentWalks';
import SkafellPikeCard from './skafell-pike-card/SkafellPikeCard';
import TopNav from './top-nav/TopNav';

type WalkerConceptProps = React.HTMLAttributes<HTMLElement>;

const WalkerConcept: React.FC<WalkerConceptProps> = () => {
  return (
    <div className="parent w-full h-min-full flex">
      <div className="left-area w-1/5 p-6 lg:p-10 border-r">
        <LeftNav />
      </div>
      <div className="container mx-auto p-6 lg:p-10 w-3/5">
        <TopNav />
        <div className="flex flex-wrap lg:flex-nowrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-8">
              <MtSnowDownCard />
            </div>
            <div className="">
              <SkafellPikeCard />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Leaderboard />
          </div>
        </div>
      </div>
      <div className="right-area p-6 lg:p-10 w-1/5 border-l">
        <RecentWalks />
      </div>
    </div>
  );
};

export default WalkerConcept;
