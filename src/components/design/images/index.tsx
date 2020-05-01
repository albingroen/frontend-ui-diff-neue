import * as React from 'react'
import styled from 'styled-components'
import { Grid } from '@primer/components'
import { IImage, PrimerTheme } from '../../../types'
import { Card } from '../card'

interface IImagesProps {
  images: IImage[];
}

interface IImagePreviewProps extends IImage {
  theme: PrimerTheme;
}

const ImagePreview = styled.div`
  background-image: url(${(props: IImagePreviewProps) => props.small});
  border-radius: ${(props: IImagePreviewProps) => props?.theme?.radii[2]};
  background-size: cover;
  background-position: top;
  height: 300px;
`

export const Images: React.FC<IImagesProps> = ({ images }) => (
  <Grid gridTemplateColumns="repeat(5, auto)" gridGap={3}>
    {images.map((image) => (
      <Card
        scaleOnHover
        bordered
        withoutPadding
        shadowed
        key={image._id}
        clickable
      >
        <ImagePreview {...image} />
      </Card>
    ))}
  </Grid>
)
