import React from "react";
import Image from "next/image";
import Sway from "../../public/images/swaybaebb.png";

export default function AboutMe() {
  return (
    <main className="hero">
      <div className="container hero-content flex-col-reverse lg:flex-row">
        <div className="rounded-2xl shadow-2xl slide-in-bottom-h1 border-slate-300 border-2 p-6 m-8">
          <h1 className="text-2xl font-semibold italic text-center text-black-300">
            Hey{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block bounce-top-icons">
              <span className="relative text-white">Swaybae </span>
            </span>{" "}
            Here!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            <br />
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            <br />
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-end">
            <button className="btn btn-secondary border-slate-300 border-2 text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-grow flex justify-end fade-in">
          <Image
            src={Sway}
            alt="Sway"
            quality={100}
            className="max-w-sm max-h-sm fade-in"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}
