import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../public/images/LogoWhite.png";

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content flex justify-center">
          <div className="">
            <Link href="/">
              <Image
                src={LogoWhite}
                width={400}
                height={200}
                alt="Logo White"
                priority
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
