import React from "react";
import im1 from "../../images/ui_design/p1/5aeacacab5841ada4395.jpg";
import im2 from "../../images/ui_design/p1/5afe34d74b99e4c7bd88.jpg";
import im3 from "../../images/ui_design/p1/6581a9add6e379bd20f2.jpg";
import im4 from "../../images/ui_design/p1/9d2b8701f84f57110e5e.jpg";
import im5 from "../../images/ui_design/p1/adf23cd5439becc5b58a.jpg";
import im6 from "../../images/ui_design/p1/c0a7af85d0cb7f9526da.jpg";

interface DataImages {
  name: string;
}

const data: DataImages[] = [
  {
    name: im1,
  },
  {
    name: im2,
  },
  {
    name: im3,
  },
  {
    name: im4,
  },
  {
    name: im5,
  },
  {
    name: im6,
  },
];

const UIDesign = () => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <img
            src={item.name}
            alt=""
            style={{ width: "40vw", height: "40%" }}
          />
        );
      })}
    </div>
  );
};

export default UIDesign;
