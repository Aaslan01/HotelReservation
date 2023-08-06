import {
  TextInputProps,
  View,
  TextInput,
  Text,
  Keyboard,
  Platform,
} from 'react-native';
import React, {FunctionComponent, useRef, useState} from 'react';
//   import {addPropertyStyles} from '../screens/AddProperty/AddProperty.styles';
//   import {appColors} from '../utils/colors';
//   import {replaceInitialZero} from '../utils/helperFunctions';
//   import SearchIcon from '../assets/svgs/Search';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  keyboardTypeText?: string;
  value?: string;
  onChange: any;
  editable?: boolean;
  showIcon?: boolean;
  autoFocus?: boolean;
}

export const CustomTextInput: FunctionComponent<
  CustomTextInputProps
> = props => {
  const {placeholder, placeholderTextColor, onChange, value, autoFocus} =
    props;
  const [isFocused, setIsFocused] = useState(false);
  const focusOne = useRef<any>(null);
  setTimeout(() => {
    if (autoFocus) {
      focusOne.current.focus();
    }
  }, 300);
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: Platform.OS === 'android' ? 0 : 12,
          paddingLeft: 10,
          borderColor: isFocused ? '#37474F' : '#BBBBBB',
        },
        Platform.OS === 'android' && {height: 44},
      ]}>
      <>
        {/* {props?.showIcon && <SearchIcon height={16} width={16} />} */}
        <TextInput
          ref={focusOne}
          editable={props?.editable}
        //   keyboardType={props.keyboardTypeText}
          style={{
            width: '90%',
            // fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#37474F',
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={text => onChange((text)?.trimStart())}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </>
    </View>
  );
};
