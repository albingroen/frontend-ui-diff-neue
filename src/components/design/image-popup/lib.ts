import { IActiveImages, ImageBrowseDir } from '../../../types'

export const getDropdownOptionsFromEnvironments = (
  environments: string[],
  name: string
) => [
  {
    key: 0,
    title: 'Environments',
    options: environments.map((environment: string) => ({
      value: environment,
      text: `${name} (${environment})`,
      key: environment
    }))
  }
]

export interface IImagePopup {
  onDismiss: () => void;
  activeImages: IActiveImages;
  onChangeFromEnv: (env: string) => void;
  onChangeToEnv: (env: string) => void;
  setActiveImages: (images: IActiveImages) => void;
  onBrowse: (dir: ImageBrowseDir) => void;
  environments: string[];
}
