import * as React from 'react'
import { useIntl } from 'react-intl'
import { IImage, IActiveImages, ImageBrowseDir } from '../../../../types'
import { ImagePopup } from '../../../../components/design/image-popup'
import { Images as ImageGrid, Section, Select } from '../../../../components'
import { getImagesByEnvironment } from '../../../../lib/images'
import { Box } from '@primer/components'
import messages from './lib'

interface IImagesProps {
  images: IImage[];
}

const initialActiveImages = {
  from: undefined,
  to: undefined
}

const Images: React.FC<IImagesProps> = ({ images }) => {
  const intl = useIntl()

  const [activeImages, setActiveImages] = React.useState<IActiveImages>(
    initialActiveImages
  )

  const imagesByEnvironemnt = getImagesByEnvironment(images)

  const [baseEnvironment, setBaseEnvironment] = React.useState<string>(
    Object.keys(imagesByEnvironemnt)[0]
  )

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

  const onBrowse = (dir: ImageBrowseDir) => {
    const { from: fromImg, to: toImg } = activeImages || {}

    const fromIndex =
      fromImg && imagesByEnvironemnt[fromImg?.env].indexOf(fromImg)

    // Add or substract index
    const operator = dir === 'next' ? 1 : -1

    const newFromImage =
      fromImg && fromIndex !== undefined
        ? imagesByEnvironemnt[fromImg?.env][fromIndex + operator]
        : undefined

    // Update state
    setActiveImages({
      from: newFromImage,
      to: toImg?.env
        ? imagesByEnvironemnt[toImg?.env].find(
          (img: IImage) => img.name === newFromImage?.name
        )
        : undefined
    })
  }

  return (
    <div>
      <Section title={messages.imagesHeading} lede={messages.imagesLede}>
        {Object.keys(imagesByEnvironemnt)?.length > 0 && (
          <Box mb={4}>
            <Select
              onChange={(value?: string) => {
                if (value) {
                  setBaseEnvironment(value)
                }
              }}
              ariaLabel="base-image-environment"
              title={`${intl.formatMessage(
                messages.baseEnvironment
              )}: ${baseEnvironment}`}
              value={baseEnvironment}
              options={[
                {
                  title: intl.formatMessage(messages.environments),
                  key: 0,
                  options: Object.keys(imagesByEnvironemnt).map(
                    (env: string) => ({
                      value: env,
                      text: env,
                      key: env
                    })
                  )
                }
              ]}
            />
          </Box>
        )}

        <ImageGrid
          baseEnvironment={baseEnvironment}
          imagesByEnvironemnt={imagesByEnvironemnt}
          onImageClick={(image: IImage) => {
            setActiveImages({
              from: image
            })
          }}
        />
      </Section>

      {activeImages?.from && (
        <ImagePopup
          onBrowse={onBrowse}
          onDismiss={() => setActiveImages(initialActiveImages)}
          onChangeFromEnv={(env: string) => onChangeEnv(env, 'from')}
          onChangeToEnv={(env: string) => onChangeEnv(env, 'to')}
          activeImages={activeImages}
          setActiveImages={setActiveImages}
          environments={Object.keys(imagesByEnvironemnt)}
          onReset={() => {
            setActiveImages({
              ...activeImages,
              to: undefined
            })
          }}
        />
      )}
    </div>
  )
}

export default Images
