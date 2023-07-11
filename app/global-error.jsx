"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main>
          <div className="container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
