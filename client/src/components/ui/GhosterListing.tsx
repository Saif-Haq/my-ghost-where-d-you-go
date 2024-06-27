import plus from "../../assets/thunder-striking-ivo-vicic-1-00-16.mp3";
import { FC } from 'react';
import { GhosterItem } from './GhosterItem';
import { Company, GhosterListingProps } from '../../InterfaceTypes';
import sadGhost from "../../assets/noun-sad-ghost-1040414.png";

export const GhosterListing: FC<GhosterListingProps> = ({ ghosters, increaseGhostCount }) => {
  return (
    <div>
      {ghosters.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {ghosters.map((ghost: Company) => (
            <GhosterItem
              key={ghost.id} // Add a unique key for each item in the list
              ghost={ghost}
              handleClick={() => {
                new Audio(plus).play();
                increaseGhostCount(ghost.id);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img src={sadGhost} className="w-28" alt="Sad Ghost" />
          <div className="p-4">
            No Ghost-ers Found
          </div>
        </div>
      )}
    </div>
  );
};
