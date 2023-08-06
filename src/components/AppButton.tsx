/** @format */

import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleProp,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
// import {appColors} from '../utils/colors';
// import {FontRegular, FontSemiBold} from '../utils/constants';
import {TextStyle} from 'react-native';
// import StyleGuide from '../StyleGuide'

interface IAppButton {
  buttonProps?: TouchableOpacityProps;
  innerTextProps?: StyleProp<TextStyle>;
  text: string;
  isLoading?: boolean;
  loaderColor?: string;
  disbled?: string;
  minMarginTop?: boolean;
  btnDisabled?: boolean;
  height?: number;
}
export function AppButton({
  buttonProps = {},
  innerTextProps = {},
  text,
  isLoading,
  loaderColor,
  minMarginTop = false,
  btnDisabled = false,
  height = 40,
}: IAppButton) {
  const {style: buttonStyle, disabled, ...buttonRest} = buttonProps;
  // const {style: textStyle, ...textRest} = innerTextProps;

  return (
    <TouchableOpacity
      disabled={btnDisabled}
      style={[
        {
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          backgroundColor: disabled || btnDisabled ? '#BBBBBB' : '#37474F',
          // paddingVertical: 12,
          height: height,
        },
        buttonStyle,
      ]}
      {...buttonRest}>
      {!isLoading ? (
        <Text
          style={[
            {
              textTransform: 'uppercase',
              fontSize: 14,
              fontFamily: 'Poppins-SemiBold',
              color: '#fff',
            },
            // {...innerTextProps},
          ]}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator size="small" color={loaderColor} />
      )}
    </TouchableOpacity>
  );
}
