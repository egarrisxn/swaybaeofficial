import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import LogoWhite from "../public/images/logowhite.png";
import CustomButton from "../components/CustomButton";
=======
import LogoWhite from "@/public/images/logowhite.png";
import CustomButton from "@/components/CustomButton";
>>>>>>> c577799e1c5b7a145c1d79a3fe66ca2675680001

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content flex flex-col items-center">
          <div className="mb-4">
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
          <CustomButton />
        </div>
      </main>
    </>
  );
}
