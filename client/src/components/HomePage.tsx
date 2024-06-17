import { useState } from 'react';
import grave from "../assets/grave.png";
import spiderWeb from "../assets/spider-web.png";
import { Card } from './ui/card';
export const HomePage = () => {

  interface Company {
    company: string,
    id: number,
    ghostCount: number
  }

  const initialGhosters: Company[] = [
    {
      id: 0,
      company: "Test Company",
      ghostCount: 100
    },
    {
      id: 2,
      company: "Test Company 2",
      ghostCount: 1
    },
    {
      id: 3,
      company: "Test Company 3",
      ghostCount: 2
    },
    {
      id: 4,
      company: "Bug Hunter",
      ghostCount: 3
    }
  ]

  const [ghosters, setGhosters] = useState<Company[]>(initialGhosters);

  const increaseGhostCount = (id: number) => {
    setGhosters(prevGhosters =>
      prevGhosters.map(ghost =>
        ghost.id === id ? { ...ghost, ghostCount: ghost.ghostCount + 1 } : ghost
      )
    );
  };

  return (
    <>
      <div>HomePage</div>
      <div className="flex align-top justify-end">
        <img alt="" width="500px" className="flex scale-x-[-1] flex-end" src={spiderWeb}></img>
      </div>

      {/* <div className="flex flex-wrap gap-2">
        {
          ghosters.map((ghost) => (
            <Card key={ghost.id} className='w-1/4 h-79 mb-7 relative hover:border-gray-700 confetti-container flex'>
              <img alt="" width="500px" src={grave} />

              <p className='text-shadow-custom font-bold text-2xl justify-center items-center flex'>{ghost.ghostCount}</p>

              <div className='absolute'>
                <div className='left-[13.5rem] top-[-17.5rem] absolute'>
                  <button onClick={() => increaseGhostCount(ghost.id)}>Increase Ghost Count</button>
                </div>
              </div>


              <p>{ghost.company}</p>
              <p>Ghost Count: {ghost.ghostCount}</p>
            </Card>
          ))
        }
      </div> */}

      <div className="flex flex-wrap gap-2">
        {
          ghosters.map((ghost) => (
            <Card key={ghost.id} className='w-1/4 h-79 mb-7 relative hover:border-gray-700 confetti-container flex'>
              <img alt="" width="500px" src={grave} />

              <p className='left-1/2 top-1/2 text-shadow-custom font-bold text-2xl justify-center items-center flex absolute'>{ghost.ghostCount}</p>

              <div className='absolute items-center flex left-1/2 top-1/2'>
                <button onClick={() => increaseGhostCount(ghost.id)}>Increase Ghost Count</button>
              </div>


              <p className='absolute'>{ghost.company}</p>
            </Card>
          ))
        }
      </div>
    </>
  )
}
