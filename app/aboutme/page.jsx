import React from "react";

const AboutMe = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/stonecold.jpg"
          className=" max-w-sm rounded-lg shadow-2xl"
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
};

export default AboutMe;
