'use client'

export default function GlobalError({error, reset}) {
  if (error) {
    console.log(error)
  }

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try Again</button>
      </body>
    </html>
  )
}
