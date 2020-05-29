import * as React from 'react'
import styled from 'styled-components'
import { Grid } from '@primer/components'
import { IImage, PrimerTheme, ImagesByEnvironment } from '../../../types'
import { Card } from '../card'
import { Empty } from '../../'
import { defineMessages } from 'react-intl'
import { marketingSiteUrl } from '../../../lib'

const messages = defineMessages({
  emptyHeading: {
    defaultMessage: 'No uploaded images found',
    id: 'component.images.empty.heading'
  },
  emptyLede: {
    defaultMessage: 'We could not find any images',
    id: 'component.images.empty.lede'
  },
  emptyCta: {
    defaultMessage: 'How do I upload images?',
    id: 'component.images.empty.cta'
  }
})

interface IImagesProps {
  onImageClick?: (image: IImage) => void;
  images?: IImage[];
  imagesByEnvironemnt?: ImagesByEnvironment;
  baseEnvironment?: string;
}

interface IImagePreviewProps extends IImage {
  theme: PrimerTheme;
}

const ImagePreview = styled.div`
  background-image: url(${(props: IImagePreviewProps) => props.small});
  border-radius: ${(props: IImagePreviewProps) => props?.theme?.radii[2]};
  background-size: cover;
  background-position: top;
  height: 250px;
  position: relative;

  &:after {
    opacity: 0;
    content: '${(props: IImagePreviewProps) => `${props.name} (${props.env})`}';
    border-radius: ${(props: IImagePreviewProps) => props?.theme?.radii[2]};
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.75);
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5em;
    transition: ${(props) => props?.theme?.transitions?.default};
    text-align: center;
  }

  &:hover {
    transition: ${(props) => props?.theme?.transitions?.default};

    &:after {
      opacity: 1;
      content: '${(props: IImagePreviewProps) =>
        `${props.name} (${props.env})`}';
      border-radius: ${(props: IImagePreviewProps) => props?.theme?.radii[2]};
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0, 0.75);
      height: 100%;
      width: 100%;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.5em;
      transition: ${(props) => props?.theme?.transitions?.default};
    }
  }
`

export const Images: React.FC<IImagesProps> = ({
  imagesByEnvironemnt,
  baseEnvironment,
  onImageClick
}) => {
  const baseEnvironmentImages =
    imagesByEnvironemnt &&
    (baseEnvironment
      ? imagesByEnvironemnt[baseEnvironment]
      : Object.values(imagesByEnvironemnt)[0])

  return imagesByEnvironemnt ? (
    Object.values(imagesByEnvironemnt).flatMap((imgs: IImage[]) => imgs)
      .length ? (
        <Grid gridTemplateColumns="repeat(5, auto)" gridGap={3}>
          {baseEnvironmentImages?.map((image: IImage) => (
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
      ) : (
        <Empty
          heading={messages.emptyHeading}
          lede={messages.emptyLede}
          cta={messages.emptyCta}
          link={`${marketingSiteUrl}/documentation/getting-started`}
        />
      )
  ) : null
}
