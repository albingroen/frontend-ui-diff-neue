import { IImage, ImagesByEnvironment } from '../types'

export const getImagesByEnvironment = (
  images: IImage[]
): ImagesByEnvironment => {
  const imagesByEnvironment: ImagesByEnvironment = {}

  images.forEach((image: IImage) => {
    if (imagesByEnvironment[image.env]) {
      imagesByEnvironment[image.env].push(image)
    } else {
      imagesByEnvironment[image.env] = [image]
    }
  })

  return imagesByEnvironment
}
