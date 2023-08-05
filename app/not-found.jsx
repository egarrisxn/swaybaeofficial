import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="container flex justify-center">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          <Link href="/">Go Home</Link>
        </p>
      </div>
    </div>
  );
}
