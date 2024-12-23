'use client'
import {Card} from '@/components/ui/Card'
import {Badge} from '@/components/ui/Badge'
import {ScrollArea} from '@/components/ui/ScrollArea'

const goals = [
  {
    points: 10000,
    title: 'Chat picks our Chicken Wing flavors for dinner',
    description: "Chat will vote on the sauces and dips for Ethan and Sway's dinner!",
    completed: false,
    videoLink: null,
  },
  {
    points: 20000,
    title: 'Bring back the "MOAR CAFFEINE" channel point button',
    description:
      'Instead of "hydrate", we caffeinate! For the rest of the Subathon, Chat can caffeinate Sway! (within reason)',
    completed: false,
    videoLink: null,
  },
  {
    points: 25000,
    title: 'Unlock Reaction Test during Gingerbread House Stream',
    description:
      'The 24th will be a Gingerbread baking stream. Whenever a sub/cheer happens, a reaction test will auto start and Sway needs to make it back to her computer and not fail the test, otherwise...uh oh!',
    completed: false,
    videoLink: null,
  },
  {
    points: 30000,
    title: 'Solo Duos until first place',
    description:
      "Sway will duo queue with herself on her phone and won't stop until she gets a first!",
    completed: false,
    videoLink: null,
  },
  {
    points: 40000,
    title: 'No "sway swears" for 1 hour',
    description: 'No "butts", no "heck", and especially no "heckin butts" for a whole hour.',
    completed: false,
    videoLink: null,
  },
  {
    points: 50000,
    title: 'Play a Hearthstone Battlegrounds Game with an XBOX controller on high sensitivity',
    description:
      'Exactly what it sounds like. Hearthstone Battlegrounds. Xbox controller. These two things were not meant to be.',
    completed: false,
    videoLink: null,
  },
  {
    points: 60000,
    title: 'Give Ethan a Nerf Gun',
    description:
      "Chat gives Ethan a present - it's a nerf gun to randomly surprise Sway. *Thaaaaanks a lot, Chat.*",
    completed: false,
    videoLink: null,
  },
  {
    points: 70000,
    title: 'Sway plays "Would you Rather" with Chat',
    description: 'Sway has some "Would you Rather" questions to play with Chat!',
    completed: false,
    videoLink: null,
  },
  {
    points: 80000,
    title: 'Unlock "Time Out Day"',
    description:
      'Time out day will be put on the calendar! Time out day allows chatters to duel for time outs, but be careful, If you initiate a duel and lose, the consequences are so much worse!',
    completed: false,
    videoLink: null,
  },
  {
    points: 90000,
    title: 'Domestic Beer Taste Test Challenge',
    description:
      'Sway has been in the service industry for YEARS, leading to a good knowledge on beer, but is it good enough? She will be blindfolded and taste test common American Domestic beers and do her best!',
    completed: false,
    videoLink: null,
  },
  {
    points: 100000,
    title: 'Tilt Game (I am Fish)',
    description:
      'Last year, Sway had a pretty miserable time playing Only Up, and this year, we had to bring back the frustrating games with "I am Fish". Watch her rage! (well, she doesn&apos;t really rage, just gets really sad)',
    completed: false,
    videoLink: null,
  },
  {
    points: 150000,
    title: 'Condiment Tier List',
    description:
      'Even though IRL Tier Lists are a part of Sway&apos;s schedule this Subathon, this one is particularly awful, so it deemed itself worthy of a point goal. Sway will taste and rate the condiments that are staples to the pantry!',
    completed: false,
    videoLink: null,
  },
  {
    points: 200000,
    title: "Don't Laugh Challenge (with water in mouth)",
    description:
      "Chatters have an opportunity to submit clips that they think will make Sway laugh, and Sway will attempt not to. She did do this last year, but this year there's a twist - she has to keep water in her mouth while trying not to laugh! (RIP computer)",
    completed: false,
    videoLink: null,
  },
  {
    points: 250000,
    title: 'Goat Sim 3 with Ethan',
    description: 'Sway and Ethan take on Goat Simulator 3!',
    completed: false,
    videoLink: null,
  },
  {
    points: 300000,
    title: 'Merch Giveaway',
    description: 'Sway gives away some Bae Squad merch!',
    completed: false,
    videoLink: null,
  },
  {
    points: 350000,
    title: 'Ethan Blindfolded Makeup',
    description:
      "Ethan has done Sway's makeup twice now - this time, he's going to be blindfolded. What could go wrong?",
    completed: false,
    videoLink: null,
  },
  {
    points: 400000,
    title: 'Evil Sway',
    description:
      'Evil Sway makes her epic return for some games with the community and some special Holiday Roasting.',
    completed: false,
    videoLink: null,
  },
  {
    points: 450000,
    title: 'Super Sour Candy',
    description:
      'Sway and Ethan had a whole lot of spice last Subathon. This time, Sway found the most sour candy she possibly could for them to try to tackle!',
    completed: false,
    videoLink: null,
  },
  {
    points: 500000,
    title: 'Sway at Nite',
    description:
      '**CONTENT WARNING** Sway at Nite returns again! Join Sway for some unexpected cursing and adult themes for one night only!',
    completed: false,
    videoLink: null,
  },
  {
    points: 550000,
    title: 'Dog Treat Cooking Stream',
    description:
      "Sway gets on Biff and Waffles' level and takes her cooking stream to the floor to make some dog treats for them!",
    completed: false,
    videoLink: null,
  },
  {
    points: 600000,
    title: 'BONUS GOAL: unlock Sway at Nite "Would you Rather" with chat',
    description:
      "**CONTENT WARNING** Sway at Nite takes on a game of Would you Rather, but MUCH less family friendly this time. This is a bonus goal, so it will only occur if the goal of Sway at Nite hasn't happened before this is achieved!",
    completed: false,
    videoLink: null,
  },
  {
    points: 650000,
    title: 'Brann Genderbend Cosplay',
    description:
      'Sway transforms herself into her beloved Brann Bronzebeard, bronze beard and all.',
    completed: false,
    videoLink: null,
  },
  {
    points: 700000,
    title: 'Last Day becomes a 24 hour stream',
    description:
      'Instead of 12pm-12am on January 1st, Sway will stream from 12pm January 1st until 12 pm January 2nd to wrap up the most epic Subathon!',
    completed: false,
    videoLink: null,
  },
  {
    points: 750000,
    title: 'Rewrapped Food Competition',
    description:
      "Sway and 1-2 of her friends will compete to recreate a common packaged snack (i.e. Oreos, Goldfish, Twinkies etc) of chat's choosing!",
    completed: false,
    videoLink: null,
  },
  {
    points: 800000,
    title: 'Custom Crocs',
    description:
      'Sway hates Crocs. Like a lot. Chat will help her design some special custom ones, just for her! She will have to order and wear them!',
    completed: false,
    videoLink: null,
  },
  {
    points: 1000000,
    title: 'Hair Dye',
    description: "Chat picks the new color of Sway's hair and Sway will stream the dying process!",
    completed: false,
    videoLink: null,
  },
  {
    points: 1500000,
    title: 'Tattoo',
    description:
      'Sway gives chat 3 options which they vote on to tattoo on herself, then she will stream herself getting the tattoo!',
    completed: false,
    videoLink: null,
  },
]

export function GoalsList() {
  return (
    <Card className='space-y-6 bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
      <h2 className='text-xl font-bold md:text-2xl'>Subathon Goals</h2>

      <ScrollArea className='h-[700px] pr-4'>
        <div className='space-y-4'>
          {goals.map((goal, index) => (
            <Card
              key={index}
              className={`p-4 transition-all ${
                goal.completed ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
            >
              <div className='flex items-start justify-between gap-3 md:gap-4'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2'>
                    <Badge variant={goal.completed ? 'default' : 'secondary'}>
                      {goal.points.toLocaleString()} points
                    </Badge>
                    {goal.completed && <Badge variant='success'>Completed!</Badge>}
                  </div>
                  <h3 className='text-lg font-semibold'>{goal.title}</h3>
                  <p className='text-muted-foreground'>{goal.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
