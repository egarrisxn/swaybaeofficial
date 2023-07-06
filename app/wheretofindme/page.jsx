import React from "react";
import Calendar from "@/components/Calendar";

const WhereToFindMe = () => {
  return (
    <div className="mx-auto container gap-4">
      <div className="container" style={{ display: "flex" }}>
        <Calendar />
        <Calendar />
      </div>
    </div>
  );
};

export default WhereToFindMe;
