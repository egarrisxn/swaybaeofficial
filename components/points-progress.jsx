import { Card } from "./ui/card";

export function PointsProgress() {
  return (
    <Card className="space-y-6 bg-gradient-to-br from-purple-100 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h2 className="text-lg font-bold md:text-xl xl:text-2xl">
          The Event Has Ended.
        </h2>
        <span className="text-sm font-semibold text-purple-600 md:text-lg dark:text-pink-400">
          Thank You For Your Support!
        </span>
      </div>
    </Card>
  );
}
