import React from "react";

const BusinessInquiries = () => {
  return (
    <div className="h-full w-full bg-gradient-to-tl from-base-100 to-base-200">
      <div className="flex flex-col items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInquiries;
