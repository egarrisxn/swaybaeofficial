import React from "react";
import Image from "next/image";
import Sway from "../../public/images/swaybaebb.png";

export default function AboutMe() {
  return (
    <main>
      <div className="hero min-h-screen p-10 mt-6 place-items-center content-center justify-center">
        <div className="hero-content flex-col md:flex-row">
          <div>
            <Image
              src={Sway}
              alt="Sway"
              className="max-w-sm max-h-sm rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Swaybae!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              <br />
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              <br />
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
