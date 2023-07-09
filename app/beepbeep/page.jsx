export default function Home() {
  return (
    <>
      <main className="container md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Main Hero Message to sell your app
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </p>

          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Download our app:
          </p>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <img
              src="images/App Store.svg"
              className="h-12 pr-4 bounce-top-icons w-full"
            />
            <img
              src="/images/Play Store.svg"
              className="h-12 bounce-top-icons w-full"
            />
          </div>
        </div>

        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom h-full"
            src="/images/devices.svg"
          />
        </div>
      </main>
    </>
  );
}
