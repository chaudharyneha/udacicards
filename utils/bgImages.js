import { Platform } from 'react-native'
export const IMAGE_RESIZE_MODE = (Platform.OS === 'ios' ? 'repeat' : 'cover')

export const backgroundImages = [
  require('./../assets/backgrounds/1.png'),
  require('./../assets/backgrounds/2.png')
]

export function getBgImage(index) {
  return backgroundImages[index % 2]
}
