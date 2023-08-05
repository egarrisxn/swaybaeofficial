"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main>
          <div className={`container ${error}`}>
            <div className="container flex justify-center">
              <h2>Something went wrong!</h2>
              <button onClick={() => reset()}>Try again</button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
