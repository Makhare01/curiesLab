import React from "react"

import { BouncedDivStyle, BouncedbubbleDiv, BouncedbubbleImg, BouncedImgStyle, BouncedBubbleImgText } from "./Bounced.style";


const Bounced = ({ text, img1, img2, leftPos, rightPos, bottomPos, topPos }) => {
  return <BouncedDivStyle style={{ left: leftPos && leftPos + "%", right: rightPos && rightPos + "%", bottom: bottomPos && bottomPos + "%", top: topPos && topPos }}>
    <BouncedbubbleDiv>
      <BouncedBubbleImgText> {text} </BouncedBubbleImgText>
      <BouncedbubbleImg src={img1} />
    </BouncedbubbleDiv>
    <BouncedImgStyle src={img2} />
  </BouncedDivStyle>
}

export default Bounced;
