import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const goals = [
  {
    points: 10000,
    title: "Chat picks our Pizza toppings for our pizza dinner",
    description: "Chat will vote on the sauces and dips for Ethan and Sway's dinner!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2334293697?t=05h13m04s",
    date: null,
  },
  {
    points: 20000,
    title: 'Bring back the "MOAR CAFFEINE" channel point button',
    description:
      'Instead of "hydrate", we caffeinate! For the rest of the Subathon, Chat can caffeinate Sway! (within reason)',
    completed: true,
    videoLink: null,
    date: null,
  },
  {
    points: 25000,
    title: "Unlock Reaction Test during Gingerbread House Stream",
    description:
      "The 24th will be a Gingerbread baking stream. Whenever a sub/cheer happens, a reaction test will auto start and Sway needs to make it back to her computer and not fail the test, otherwise...uh oh!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2335104951?t=04h58m41s",
    date: null,
  },
  {
    points: 30000,
    title: "Solo Duos until first place",
    description:
      "Sway will duo queue with herself on her phone and won't stop until she gets a first!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2334293697?t=01h19m53s",
    date: null,
  },
  {
    points: 40000,
    title: 'No "sway swears" for 1 hour',
    description: 'No "butts", no "heck", and especially no "heckin butts" for a whole hour.',
    completed: true,
    videoLink: null,
    date: null,
  },
  {
    points: 50000,
    title: "Play a Hearthstone Battlegrounds Game with an XBOX controller on high sensitivity",
    description:
      "Exactly what it sounds like. Hearthstone Battlegrounds. Xbox controller. These two things were not meant to be.",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2337284361",
    date: null,
  },
  {
    points: 60000,
    title: "Give Ethan a Nerf Gun",
    description:
      "Chat gives Ethan a present - it's a nerf gun to randomly surprise Sway. *Thaaaaanks a lot, Chat.*",
    completed: true,
    videoLink:
      "https://www.twitch.tv/sway_bae/clip/AdorablePolishedHedgehogRalpherZ-x2kJfyysrU0Z2AqK",
    date: null,
  },
  {
    points: 70000,
    title: 'Sway plays "Would you Rather" with Chat',
    description: 'Sway has some "Would you Rather" questions to play with Chat!',
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2338655404",
    date: null,
  },
  {
    points: 80000,
    title: 'Unlock "Time Out Day"',
    description:
      "Time out day will be put on the calendar! Time out day allows chatters to duel for time outs, but be careful, If you initiate a duel and lose, the consequences are so much worse!",
    completed: true,
    videoLink: null,
    date: null,
  },
  {
    points: 90000,
    title: "Domestic Beer Taste Test Challenge",
    description:
      "Sway has been in the service industry for YEARS, leading to a good knowledge on beer, but is it good enough? She will be blindfolded and taste test common American Domestic beers and do her best!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2339201837?t=05h41m31s",
    date: null,
  },
  {
    points: 100000,
    title: "Tilt Game (I am Fish)",
    description:
      "Last year, Sway had a pretty miserable time playing Only Up, and this year, we had to bring back the frustrating games with I am Fish. Watch her rage! (well, she doesn't really rage, just gets really sad)",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2336496967?t=05h53m31s",
    date: null,
  },
  {
    points: 150000,
    title: "Condiment Tier List",
    description:
      "Even though IRL Tier Lists are a part of Sway's schedule this Subathon, this one is particularly awful, so it deemed itself worthy of a point goal. Sway will taste and rate the condiments that are staples to the pantry!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2337287618",
    date: null,
  },
  {
    points: 200000,
    title: "Don't Laugh Challenge (with water in mouth)",
    description:
      "Chatters have an opportunity to submit clips that they think will make Sway laugh, and Sway will attempt not to. She did do this last year, but this year there's a twist - she has to keep water in her mouth while trying not to laugh! (RIP computer)",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2339201837?t=04h53m21s",
    date: null,
  },
  {
    points: 250000,
    title: "Goat Sim 3 with Ethan",
    description: "Sway and Ethan take on Goat Simulator 3!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2339201837?t=03h14m41s",
    date: null,
  },
  {
    points: 300000,
    title: "Merch Giveaway",
    description: "Sway gives away some Bae Squad merch!",
    completed: true,
    videoLink: null,
    date: null,
  },
  {
    points: 350000,
    title: "Ethan Blindfolded Makeup",
    description:
      "Ethan has done Sway's makeup twice now - this time, he's going to be blindfolded. What could go wrong?",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2339933031?t=08h26m14s",
    date: null,
  },
  {
    points: 400000,
    title: "Evil Sway",
    description:
      "Evil Sway makes her epic return for some games with the community and some special Holiday Roasting.",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2339933031?t=06h20m30s",
    date: null,
  },
  {
    points: 450000,
    title: "Super Sour Candy",
    description:
      "Sway and Ethan had a whole lot of spice last Subathon. This time, Sway found the most sour candy she possibly could for them to try to tackle!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2348787341?t=00h10m56s",
    date: null,
  },
  {
    points: 500000,
    title: "Sway at Nite",
    description:
      "**CONTENT WARNING** Sway at Nite returns again! Join Sway for some unexpected cursing and adult themes for one night only!",
    completed: true,
    videoLink: null,
    date: "Vote now for the date!",
  },
  {
    points: 550000,
    title: "Dog Treat Cooking Stream",
    description:
      "Sway gets on Biff and Waffles' level and takes her cooking stream to the floor to make some dog treats for them!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2348787341?t=03h03m29s",
    date: null,
  },
  {
    points: 600000,
    title: 'BONUS GOAL: unlock Sway at Nite "Would you Rather" with chat',
    description:
      "**CONTENT WARNING** Sway at Nite takes on a game of Would you Rather, but MUCH less family friendly this time. This is a bonus goal, so it will only occur if the goal of Sway at Nite hasn't happened before this is achieved!",
    completed: true,
    videoLink: null,
    date: "Vote now for the date!",
  },
  {
    points: 650000,
    title: "Brann Genderbend Cosplay",
    description:
      "Sway transforms herself into her beloved Brann Bronzebeard, bronze beard and all.",
    completed: true,
    videoLink: null,
    date: "Date: TBD",
  },
  {
    points: 700000,
    title: "Last Day becomes a 24 hour stream",
    description:
      "Instead of 12pm-12am on January 1st, Sway will stream from 12pm January 1st until 12 pm January 2nd to wrap up the most epic Subathon!",
    completed: true,
    videoLink: "https://www.twitch.tv/videos/2341517186?t=09h58m55s",
    date: null,
  },
  {
    points: 750000,
    title: "Rewrapped Food Competition",
    description:
      "Sway and 1-2 of her friends will compete to recreate a common packaged snack (i.e. Oreos, Goldfish, Twinkies etc) of chat's choosing!",
    completed: true,
    videoLink: null,
    date: "Date: TBD",
  },
  {
    points: 800000,
    title: "Custom Crocs",
    description:
      "Sway hates Crocs. Like a lot. Chat will help her design some special custom ones, just for her! She will have to order and wear them!",
    completed: true,
    videoLink: null,
    date: "Jan. 10th, 2025",
  },
  {
    points: 1000000,
    title: "Hair Dye",
    description: "Chat picks the new color of Sway's hair and Sway will stream the dying process!",
    completed: false,
    videoLink: null,
    date: null,
  },
  {
    points: 1500000,
    title: "Tattoo",
    description:
      "Sway gives chat 3 options which they vote on to tattoo on herself, then she will stream herself getting the tattoo!",
    completed: false,
    videoLink: null,
    date: null,
  },
];

export function GoalsList() {
  return (
    <Card className="space-y-6 bg-gradient-to-tr from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800">
      <h2 className="text-lg font-bold md:text-xl xl:text-2xl">Sub Goal Recap</h2>
      <div className="grid gap-4 sm:p-2 md:p-4 xl:p-4">
        {goals.map((goal, index) => {
          const cardContent = (
            <Card
              key={index}
              className={`group rounded-lg border p-4 shadow-md transition-transform ${
                goal.completed
                  ? "bg-gradient-to-tr from-white to-green-300/20 hover:scale-105 dark:from-green-800/40 dark:to-black"
                  : "bg-gradient-to-tl from-gray-100 to-white dark:from-slate-900 dark:to-slate-950"
              }`}
            >
              <div className="flex h-full flex-col space-y-2 lg:space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-sm font-medium dark:text-black">
                    {goal.points.toLocaleString()} points
                  </Badge>
                  {goal.completed && (
                    <Badge
                      variant="success"
                      className="border-slate-50 bg-pink-500 font-medium text-white dark:text-black"
                    >
                      Completed!
                    </Badge>
                  )}
                </div>
                <h4 className="text-sm font-semibold leading-tight text-gray-900 sm:text-lg xl:text-xl 2xl:pl-1 2xl:pt-3 2xl:text-2xl dark:text-gray-200">
                  {goal.title}
                </h4>
                <p className="flex max-w-4xl flex-1 text-pretty text-xs leading-snug text-gray-700 sm:text-sm xl:text-base 2xl:pl-1 2xl:text-lg dark:text-gray-100">
                  {goal.description}
                </p>

                <div className="flex pt-2 font-semibold drop-shadow sm:text-lg md:justify-end xl:text-xl">
                  {goal.videoLink ? (
                    <span className="text-primary group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-4">
                      Watch here!
                    </span>
                  ) : (
                    goal.date && (
                      <span className="italic text-gray-900 dark:text-gray-50">{goal.date}</span>
                    )
                  )}
                </div>
              </div>
            </Card>
          );

          return goal.videoLink ? (
            <a
              key={index}
              href={goal.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </div>
    </Card>
  );
}
