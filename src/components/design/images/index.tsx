import * as React from 'react'
import styled from 'styled-components'
import { Grid } from '@primer/components'
import { IImage, PrimerTheme, ImagesByEnvironment } from '../../../types'
import { Card } from '../card'

interface IImagesProps {
  onImageClick?: (image: IImage) => void;
  images?: IImage[];
  imagesByEnvironemnt?: ImagesByEnvironment;
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

export const Images: React.FC<IImagesProps> = ({
  imagesByEnvironemnt,
  onImageClick
}) => {
  const firstEnvironmentImages =
    imagesByEnvironemnt && Object.values(imagesByEnvironemnt)[0]

  return (
    <Grid gridTemplateColumns="repeat(5, auto)" gridGap={3}>
      {firstEnvironmentImages?.map((image: IImage) => (
        <Card
          scaleOnHover
          bordered
          withoutPadding
          shadowed
          key={image._id}
          clickable
          onClick={() => {
            if (onImageClick) {
              onImageClick(image)
            }
          }}
        >
          <ImagePreview {...image} />
        </Card>
      ))}
    </Grid>
  )
}
