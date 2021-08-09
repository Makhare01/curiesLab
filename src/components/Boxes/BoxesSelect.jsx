import React from "react";
import { BoxesSelectTagStyle, BoxesOptionTagStyle } from "./Boxes.style";

const BoxesSelect = () => {
  const handleClose = () => {
    console.log("Work!");
    let optionViewButton = document.getElementById("options-view-button");
    optionViewButton.checked = false;
  };
  return (
    // <BoxesSelectTagStyle className="custom-select">
    //   <BoxesOptionTagStyle value="all">ყველა</BoxesOptionTagStyle>
    //   <BoxesOptionTagStyle value="Option 2">Option 2</BoxesOptionTagStyle>
    //   <BoxesOptionTagStyle value="Option 3">Option 3</BoxesOptionTagStyle>
    //   <BoxesOptionTagStyle value="Option 4">Option 4</BoxesOptionTagStyle>
    //   <BoxesOptionTagStyle value="Option 5">Option 5</BoxesOptionTagStyle>
    //   <BoxesOptionTagStyle value="Option length">
    //     Option that has too long of a value to fit
    //   </BoxesOptionTagStyle>
    // </BoxesSelectTagStyle>
    <form id="app-cover">
      <div id="select-box">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" className="brd">
          <div id="selected-value">
            <span>ყველა</span>
          </div>
          <div id="chevrons">
            <i className="fas fa-caret-up"></i>
            <i className="fas fa-caret-down"></i>
          </div>
        </div>

        <div id="options">
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="codepen"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="codepen"
            />
            {/* <i className="fab fa-codepen"></i> */}
            <span className="label">ყველა</span>
            <span className="opt-val">ყველა</span>
          </div>
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="dribbble"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="dribbble"
            />
            {/* <i className="fab fa-dribbble"></i> */}
            <span className="label">Dribbble</span>
            <span className="opt-val">Dribbble</span>
          </div>
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="behance"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="behance"
            />
            {/* <i className="fab fa-behance"></i> */}
            <span className="label">Behance</span>
            <span className="opt-val">Behance</span>
          </div>
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="hackerrank"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="hackerrank"
            />
            {/* <i className="fab fa-hackerrank"></i> */}
            <span className="label">HackerRank</span>
            <span className="opt-val">HackerRank</span>
          </div>
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="stackoverflow"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="stackoverflow"
            />
            {/* <i className="fab fa-stack-overflow"></i> */}
            <span className="label">StackOverflow</span>
            <span className="opt-val">StackOverflow</span>
          </div>
          <div className="option" onClick={handleClose}>
            <input
              className="s-c top"
              type="radio"
              name="platform"
              value="freecodecamp"
            />
            <input
              className="s-c bottom"
              type="radio"
              name="platform"
              value="freecodecamp"
            />
            {/* <i className="fab fa-free-code-camp"></i> */}
            <span className="label">FreeCodeCamp</span>
            <span className="opt-val">FreeCodeCamp</span>
          </div>
          <div id="option-bg"></div>
        </div>
      </div>
    </form>
  );
};

export default BoxesSelect;
