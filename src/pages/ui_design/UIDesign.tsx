import React, { useEffect, useState } from "react";
import p1a from "../../images/ui_design/p1/5aeacacab5841ada4395.jpg";
import { css } from "@emotion/css";

const UIDesign = () => {
  const [saveImages, setSaveImage] = useState<any>([]);
  // create to object
  // function importAll(r: __WebpackModuleApi.RequireContext) {
  //   let images: { [key: string]: string } = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // }

  // create to array
  function importAll(r: any) {
    return r.keys().map(r);
  }

  // Sử dụng require.context để import tất cả các file trong thư mục
  // must install npm install @types/webpack-env --save-dev
  let p1 = importAll(
    require.context(`../../images/ui_design/p1/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p2 = importAll(
    require.context("../../images/ui_design/p2/", false, /\.(png|jpe?g|svg)$/)
  );

  let p3 = importAll(
    require.context("../../images/ui_design/p3/", false, /\.(png|jpe?g|svg)$/)
  );

  let p4 = importAll(
    require.context("../../images/ui_design/p4/", false, /\.(png|jpe?g|svg)$/)
  );

  let p5 = importAll(
    require.context("../../images/ui_design/p5/", false, /\.(png|jpe?g|svg)$/)
  );

  let p6 = importAll(
    require.context("../../images/ui_design/p6/", false, /\.(png|jpe?g|svg)$/)
  );

  let p7 = importAll(
    require.context("../../images/ui_design/p7/", false, /\.(png|jpe?g|svg)$/)
  );

  let p8 = importAll(
    require.context("../../images/ui_design/p8/", false, /\.(png|jpe?g|svg)$/)
  );

  let p9 = importAll(
    require.context("../../images/ui_design/p9/", false, /\.(png|jpe?g|svg)$/)
  );
  let p10 = importAll(
    require.context("../../images/ui_design/p10/", false, /\.(png|jpe?g|svg)$/)
  );

  let p11 = importAll(
    require.context("../../images/ui_design/p11/", false, /\.(png|jpe?g|svg)$/)
  );

  let p12 = importAll(
    require.context("../../images/ui_design/p12/", false, /\.(png|jpe?g|svg)$/)
  );

  let p13 = importAll(
    require.context(`../../images/ui_design/p13/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p14 = importAll(
    require.context("../../images/ui_design/p14/", false, /\.(png|jpe?g|svg)$/)
  );

  let p15 = importAll(
    require.context(`../../images/ui_design/p15/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p16 = importAll(
    require.context(`../../images/ui_design/p16/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p17 = importAll(
    require.context(`../../images/ui_design/p17/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p18 = importAll(
    require.context(`../../images/ui_design/p18/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p19 = importAll(
    require.context(`../../images/ui_design/p19/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p20 = importAll(
    require.context(`../../images/ui_design/p20/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p21 = importAll(
    require.context(`../../images/ui_design/p21/`, false, /\.(png|jpe?g|svg)$/)
  );

  let p22 = importAll(
    require.context(`../../images/ui_design/p22/`, false, /\.(png|jpe?g|svg)$/)
  );

  let colors1 = importAll(
    require.context(
      `../../images/ui_colors/use_colors/`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  let complementaryColor = importAll(
    require.context(
      `../../images/ui_colors/complementary_color/`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  let images = [
    ...p1,
    "step",
    ...p2,
    "step",
    ...p3,
    "step",
    ...p4,
    "step",
    ...p5,
    "step",
    ...p6,
    "step",
    ...p7,
    "step",
    ...p8,
    "step",
    ...p9,
    "step",
    ...p10,
    "step",
    ...p11,
    "step",
    ...p12,
    "step",
    ...p13,
    "step",
    ...p14,
    "step",
    ...p15,
    "step",
    ...p16,
    "step",
    ...p17,
    "step",
    ...p18,
    "step",
    ...p19,
    "step",
    ...p20,
    "step",
    ...p21,
    "step",
    ...p22,
    "step",
    "Colors",
    ...colors1,
    "ComplementaryColor",
    ...complementaryColor,
  ];

  // State to manage whether to display the scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to check scroll position and update showScrollButton state
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Effect hook to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once after initial render

  // Function to scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let count = 0;
  return (
    <div id="content">
      {images.map((item: any, index: number) => {
        if (item === "step") {
          return (
            <div
              className={css`
                background-color: #41e441;
                padding: 5px;
              `}
            >
              {index - count}
            </div>
          );
        } else if (item === "Colors" || item === "ComplementaryColor") {
          return (
            <div
              className={css`
                background-color: #41e441;
                padding: 5px;
              `}
            >
              {item === "ComplementaryColor"
                ? "https://digiart.academy/blog/6-loai-bang-phoi-mau-sac-giup-tong-the-hai-hoa-va-noi-bat"
                : item}
            </div>
          );
        }

        count++;
        return (
          <>
            <img src={item} alt="" style={{ width: "40vw", height: "40%" }} />
          </>
        );
      })}
      {showScrollButton && (
        <button
          id="scrollToTopBtn"
          onClick={scrollToTop}
          className={css`
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #59e059;
            border: #59e059;
            border-radius: 3px;
            padding: 5px;
            cursor: pointer;
          `}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default UIDesign;
