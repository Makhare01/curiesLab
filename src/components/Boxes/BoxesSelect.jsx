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
        <div id="select-button" class="brd">
          <div id="selected-value">
            <span>ყველა</span>
          </div>
          <div id="chevrons">
            <i class="fas fa-caret-up"></i>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>

        <div id="options">
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="codepen"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="codepen"
            />
            {/* <i class="fab fa-codepen"></i> */}
            <span class="label">ყველა</span>
            <span class="opt-val">ყველა</span>
          </div>
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="dribbble"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="dribbble"
            />
            {/* <i class="fab fa-dribbble"></i> */}
            <span class="label">Dribbble</span>
            <span class="opt-val">Dribbble</span>
          </div>
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="behance"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="behance"
            />
            {/* <i class="fab fa-behance"></i> */}
            <span class="label">Behance</span>
            <span class="opt-val">Behance</span>
          </div>
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="hackerrank"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="hackerrank"
            />
            {/* <i class="fab fa-hackerrank"></i> */}
            <span class="label">HackerRank</span>
            <span class="opt-val">HackerRank</span>
          </div>
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="stackoverflow"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="stackoverflow"
            />
            {/* <i class="fab fa-stack-overflow"></i> */}
            <span class="label">StackOverflow</span>
            <span class="opt-val">StackOverflow</span>
          </div>
          <div class="option" onClick={handleClose}>
            <input
              class="s-c top"
              type="radio"
              name="platform"
              value="freecodecamp"
            />
            <input
              class="s-c bottom"
              type="radio"
              name="platform"
              value="freecodecamp"
            />
            {/* <i class="fab fa-free-code-camp"></i> */}
            <span class="label">FreeCodeCamp</span>
            <span class="opt-val">FreeCodeCamp</span>
          </div>
          <div id="option-bg"></div>
        </div>
      </div>
    </form>
  );
};

export default BoxesSelect;
