import React from "react";
import Image from "next/image";
import StoneCold from "../../public/images/StoneCold.jpg";

export default function AboutMe() {
  return (
    <main>
      <div className="container flex flex-row place-items-center content-center justify-center">
        <div className="">
          <Image
            src={StoneCold}
            alt="stonecold"
            width={200}
            height={200}
            className=""
          />
        </div>
        <div className="">
          <h1 className="">Sway!</h1>
          <p className="">
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
          <button className="">Get Started</button>
        </div>
      </div>
    </main>
  );
}
