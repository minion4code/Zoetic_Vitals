import { Platform, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

let fontPrimary = 'Montserrat-Regular';
let fontPrimarySemiBold = 'Montserrat-SemiBold';
let fontPrimaryLight = 'Montserrat-Light';
let fontPrimaryExtraLight = 'Montserrat-ExtraLight';
let fontGizmo = 'SS Gizmo';
let fontAir = 'SS Air';

export const brandColors = {
  backgroundColor: '#FAFAFA',
  brandPrimary: '#3C2865',
  brandPrimaryOpacity: 'rgba(122, 222, 229, 0.5)',
  brandSecondary: '#FFFFFF',
  brandLighter: '#E8EBF9',
}

export const layoutStyles = {
  screenWidth,
  screenHeight,
}

export const textStyles = {
  fontPrimary,
  fontPrimarySemiBold,
  fontPrimaryLight,
  fontPrimaryExtraLight,
  fontGizmo,
  fontAir,
  general: {
    fontFamily: fontPrimary,
    fontSize: 15,
    color: brandColors.greyDark
  },
}