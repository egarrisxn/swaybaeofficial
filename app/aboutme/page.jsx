import React from "react";
import Image from "next/image";
import StoneCold from "../../public/images/StoneCold.jpg";

export default function AboutMe() {
  return (
    <div className="hero min-h-screen">
      {/* <div className="hero-content flex-col lg:flex-row"> */}
      <div>
        <Image
          src={StoneCold}
          alt="stonecold"

          // className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className=" text-9xl font-bold">Sway!</h1>
          <p className=" text-lg py-6">
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
          <button className="btn btn-secondary  ">Get Started</button>
        </div>
      </div>
    </div>
  );
}
