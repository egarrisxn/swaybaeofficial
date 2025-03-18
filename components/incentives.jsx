import { Trophy, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export function Incentives() {
  return (
    <Card className="h-fit w-full space-y-6 bg-gradient-to-bl from-purple-50 to-white shadow-lg dark:from-gray-800 dark:to-black">
      <Card className="bg-gradient-to-l from-purple-500 via-pink-500 to-blue-500 p-0.5 shadow-lg">
        <div className="space-y-3 rounded-md bg-w2b p-3 md:p-4 2xl:p-6">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Trophy className="size-4 text-purple-600 lg:size-5 dark:text-pink-400" />
            <h4 className="text-lg font-semibold leading-tight text-gray-900 md:text-base lg:text-lg 2xl:text-xl dark:text-gray-200">
              Top Contributors
            </h4>
            <ArrowRight className="hidden size-4 text-purple-600 lg:block lg:size-5 dark:text-pink-400" />
          </div>
          <p className="text-sm text-slate-700 2xl:text-base dark:text-slate-300">
            The <b>Top 5 contributors</b> get a personalized alert for any Twitch event (e.g., subs,
            gifted subs, bits), along with an on-screen arrival action for their first message sent
            in stream!
          </p>
        </div>
      </Card>
    </Card>
  );
}
