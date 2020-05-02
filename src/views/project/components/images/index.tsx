import * as React from 'react'
import { IImage, IActiveImages, ImageBrowseDir } from '../../../../types'
import { ImagePopup } from '../../../../components/design/image-popup'
import { Images as ImageGrid } from '../../../../components'
import { getImagesByEnvironment } from '../../../../lib/images'

interface IImagesProps {
  images: IImage[];
}

const initialActiveImages = {
  from: undefined,
  to: undefined
}

const Images: React.FC<IImagesProps> = ({ images }) => {
  // Store current images
  const [activeImages, setActiveImages] = React.useState<IActiveImages>(
    initialActiveImages
  )

  // Images by environement
  const imagesByEnvironemnt = getImagesByEnvironment(images)

  // Environment functions
  const onChangeEnv = (env: string, type: 'from' | 'to') => {
    const currentImageName = activeImages?.from?.name || activeImages?.to?.name

    const newImage = images.find(
      (image: IImage) => image.env === env && image.name === currentImageName
    )

    setActiveImages({
      ...activeImages,
      [type]: newImage
    })
  }

  // Browsing functions
  const onBrowse = (dir: ImageBrowseDir) => {
    const currentImageFromIndex =
      activeImages?.from &&
      imagesByEnvironemnt[activeImages?.from?.env].indexOf(activeImages.from)
    const currentImageToIndex =
      activeImages?.to &&
      imagesByEnvironemnt[activeImages?.to?.env].indexOf(activeImages.to)

    switch (dir) {
      case 'prev':
        setActiveImages({
          ...activeImages,
          from:
            activeImages?.from && currentImageFromIndex
              ? imagesByEnvironemnt[activeImages?.from?.env][
                currentImageFromIndex - 1
              ]
              : undefined,
          to:
            activeImages?.to && currentImageToIndex
              ? imagesByEnvironemnt[activeImages?.to?.env][
                currentImageToIndex - 1
              ]
              : undefined
        })
        break
      case 'next':
        setActiveImages({
          ...activeImages,
          from:
            activeImages?.from && currentImageFromIndex !== undefined
              ? imagesByEnvironemnt[activeImages?.from?.env][
                currentImageFromIndex + 1
              ]
              : undefined,
          to:
            activeImages?.to && currentImageToIndex !== undefined
              ? imagesByEnvironemnt[activeImages?.to?.env][
                currentImageToIndex + 1
              ]
              : undefined
        })
        break
      default:
    }
  }

  // Reset function
  const onReset = () => {
    setActiveImages({
      ...activeImages,
      to: undefined
    })
  }

  return (
    <div>
      <ImageGrid
        imagesByEnvironemnt={imagesByEnvironemnt}
        onImageClick={(image: IImage) => {
          setActiveImages({
            from: image
          })
        }}
      />

      {activeImages?.from && (
        <ImagePopup
          onReset={onReset}
          onBrowse={onBrowse}
          onDismiss={() => setActiveImages(initialActiveImages)}
          onChangeFromEnv={(env: string) => onChangeEnv(env, 'from')}
          onChangeToEnv={(env: string) => onChangeEnv(env, 'to')}
          activeImages={activeImages}
          setActiveImages={setActiveImages}
          environments={Object.keys(imagesByEnvironemnt)}
        />
      )}
    </div>
  )
}

export default Images
