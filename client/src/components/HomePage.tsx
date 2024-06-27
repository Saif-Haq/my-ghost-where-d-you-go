import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { Company } from '../InterfaceTypes';
import spiderWeb from "../assets/spider-web.png";
import welcome from "../assets/spooky-halloween-music-jingle-tomas-herudek-1-00-12.mp3";
import plus from "../assets/thunder-striking-ivo-vicic-1-00-16.mp3";
import { GhosterListing } from './ui/GhosterListing';
import { Button } from './ui/button';
import { DialogHeader } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const HomePage = () => {
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

  const playWelcome = () => {
    new Audio(welcome).play();
  }

  const togglePlay = () => {
    new Audio(plus).play();
  }
  return (
    <>
      <button onClick={togglePlay}>
        {"Play"}
      </button>

      <Dialog defaultOpen>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" onClick={() => { navigator.clipboard.writeText("https://ui.shadcn.com/docs/installation") }} />
            </Button>
          </div>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <div onClick={playWelcome}>HomePage</div>
      <div className="flex align-top justify-end">
        <img alt="" width="500px" className=" absolute z-0 flex scale-x-[-1] flex-end w-64" src={spiderWeb}></img>
      </div>

      <GhosterListing ghosters={ghosters} increaseGhostCount={increaseGhostCount} />
    </>
  )
}
