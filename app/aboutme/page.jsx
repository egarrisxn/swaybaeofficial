import React from "react";
import Image from "next/image";
import StoneCold from "../../public/images/StoneCold.jpg";

export default function AboutMe() {
  return (
    <main className="container border-dashed border-4 border-green-500">
      {/* <div className="hero-content flex-col lg:flex-row"> */}
      <section className="container">
        <Image
          src={StoneCold}
          alt="stonecold"
          width={100}
          height={100}
          className="float-left"
        />
        <h1 className="">Sway!</h1>
        <p className="">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
          <br />
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
          <br />
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="">Get Started</button>
      </section>
    </main>
  );
}
