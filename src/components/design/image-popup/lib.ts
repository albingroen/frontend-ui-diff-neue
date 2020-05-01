import { IActiveImages } from '../../../types'

export const getDropdownOptionsFromEnvironments = (environments: string[]) => [
  {
    key: 0,
    title: 'Environments',
    options: environments.map((environment: string) => ({
      value: environment,
      text: environment,
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
  environments: string[];
}