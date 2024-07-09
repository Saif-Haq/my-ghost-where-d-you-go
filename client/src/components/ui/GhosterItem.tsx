import { FC, Suspense } from 'react';
import { GhosterListingItemProps } from '../../InterfaceTypes';
import grave from '../../assets/grave.png';
import { TiltCard } from './TiltCard';
import { Skeleton } from './skeleton';

export const GhosterItem: FC<GhosterListingItemProps> = ({ handleClick, ghost }) => {
  return (
    <Suspense fallback={<Skeleton className='w-1/4 h-79 mb-7 relative' />}>
      <>
        <TiltCard>
          <>
            {/* <div key={ghost.id} className='simple-cursor w-1/4 h-79 mb-7 relative hover:border-gray-700 confetti-container flex'> */}
            <img alt="" width="500px" src={grave} style={{
              transform: "translateZ(50px)",
            }} />

            <p className='left-1/2 top-1/2 text-shadow-custom font-bold text-2xl justify-center items-center flex absolute'>{ghost.ghostCount}</p>

            <div className='absolute items-center flex left-1/2 top-1/2'>
              <button onClick={handleClick}>Increase Ghost Count</button>
            </div>

            <p className='absolute'>{ghost.company}</p>
          </>
          {/* <div> */}
        </TiltCard>

        <div key={ghost.id} className='simple-cursor w-1/4 h-79 mb-7 relative hover:border-gray-700 confetti-container flex'>
          <img alt="" width="500px" src={grave} style={{
            transform: "translateZ(50px)",
          }} />

          <p className='left-1/2 top-1/2 text-shadow-custom font-bold text-2xl justify-center items-center flex absolute'>{ghost.ghostCount}</p>

          <div className='absolute items-center flex left-1/2 top-1/2'>
            <button onClick={handleClick}>Increase Ghost Count</button>
          </div>

          <p className='absolute'>{ghost.company}</p>
        </div>
      </>
    </Suspense>
  )
}
