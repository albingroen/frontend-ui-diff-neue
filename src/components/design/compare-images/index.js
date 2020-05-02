import * as React from 'react'
import ReactCompareImage from 'react-compare-image'

export const CompareImage = ({
  leftImage,
  rightImage,
  leftImageLabel,
  rightImageLabel
}) => (
  <ReactCompareImage
    leftImageLabel={leftImageLabel}
    rightImageLabel={rightImageLabel}
    leftImage={leftImage}
    rightImage={rightImage}
    aspectRatio="taller"
  />
)
