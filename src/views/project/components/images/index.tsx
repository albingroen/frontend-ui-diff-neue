import * as React from 'react'
import { IImage, IActiveImages } from '../../../../types'
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

    setActiveImages({
      ...activeImages,
      [type]: images.find(
        (image: IImage) => image.env === env && image.name === currentImageName
      )
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
