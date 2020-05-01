import * as React from 'react'
import ReactCompareImage from 'react-compare-image'

export const CompareImage = ({ leftImage, rightImage }) => {
  return <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />
}
