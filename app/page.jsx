const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <section className="w-full flex-center flex-col">
          <h1 className="text-center mt-10 text-5xl font-extrabold sm:text-6xl">
            Hello Friends!
            <br />
            <span className="text-center bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">
              It's Swaybae!
            </span>
          </h1>
          <p className="text-center mt-5 text-lg text-base-100 sm:text-xl max-w-2xl">
            This is my official site! Take a look around and get to know me
            better! I hope you enjoy your visit and thank you for stopping by!
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
