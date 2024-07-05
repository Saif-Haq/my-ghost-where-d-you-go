import {
  Drawer,
  DrawerClose,
  DrawerFooter
} from "@/components/ui/drawer";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Company } from '../InterfaceTypes';
import spiderWeb from "../assets/spider-web.png";
import welcome from "../assets/spooky-halloween-music-jingle-tomas-herudek-1-00-12.mp3";
import plus from "../assets/thunder-striking-ivo-vicic-1-00-16.mp3";
import { BloodDrippingButton } from './ui/BloodDrippingButton';
import { GhosterListing } from './ui/GhosterListing';
import { Button } from './ui/button';
import { DialogHeader } from './ui/dialog';
import { DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Copy, MinusIcon, PlusIcon } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

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

  const [goal, setGoal] = useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]

  return (
    <div className="w-full p-6 app">

      <TiltCard />

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--foreground))",
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-50 bg-slate-50 p-10'>
        <Dialog defaultOpen modal>
          {/* <DialogTrigger asChild>
          <Button variant="outline">Open Modal</Button>
        </DialogTrigger> */}
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
      </div>

      <>
        <p>These people have wronged you: todo: search, filters for people/orgs.</p>
        <p>Class Dojo esque. Harry Potter esque point systems?</p>


        <BloodDrippingButton text="FEEL LIKE SHIT" />

        <button onClick={togglePlay}>
          {"Play"}
        </button>



        <div onClick={playWelcome}>HomePage</div>
        <div className="flex align-top justify-end">
          <img alt="" width="500px" className=" absolute z-0 flex scale-x-[-1] flex-end w-64" src={spiderWeb}></img>
        </div>

        <GhosterListing ghosters={ghosters} increaseGhostCount={increaseGhostCount} />
      </>
    </div >
  )
}
