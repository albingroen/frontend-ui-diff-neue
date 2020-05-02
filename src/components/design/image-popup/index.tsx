import * as React from 'react'
import { useIntl } from 'react-intl'
import { Dialog, Box } from '@primer/components'
import { CompareImage } from '../../../components'
import { getDropdownOptionsFromEnvironments, IImagePopup } from './lib'
import Header from './components/header'

export const ImagePopup: React.FC<IImagePopup> = ({
  onDismiss,
  activeImages,
  onChangeFromEnv,
  onChangeToEnv,
  environments,
  onBrowse,
  onReset
}) => {
  // Intl HOC
  const intl = useIntl()

  // Name of current image being compared
  const currentImageName =
    activeImages?.from?.name || activeImages?.to?.name || ''

  // Environments to dropdown options
  const dropdownOptions = getDropdownOptionsFromEnvironments(
    environments,
    currentImageName
  )

  return (
    activeImages && (
      <Dialog onDismiss={onDismiss} isOpen={Boolean(activeImages?.from)}>
        <Header
          intl={intl}
          activeImages={activeImages}
          dropdownOptions={dropdownOptions}
          onChangeFromEnv={onChangeFromEnv}
          onChangeToEnv={onChangeToEnv}
          onBrowse={onBrowse}
          onReset={onReset}
        />
        <Box p={3}>
          {activeImages?.from &&
          activeImages?.to &&
          activeImages?.from?._id !== activeImages?.to?._id ? (
              <CompareImage
                leftImage={activeImages.from?.small}
                rightImage={activeImages.to?.small}
                leftImageLabel={
                  activeImages.from
                    ? `${activeImages.from?.name} (${activeImages.from?.env})`
                    : ''
                }
                rightImageLabel={
                  activeImages.to
                    ? `${activeImages.to?.name} (${activeImages.to?.env})`
                    : ''
                }
              />
            ) : (
              <img
                src={activeImages.from?.small}
                style={{ width: '100%' }}
                alt="Page screenshot"
              />
            )}
        </Box>
      </Dialog>
    )
  )
}
