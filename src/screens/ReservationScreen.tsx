import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {CustomTextInput} from '../components/InputField';
import {AppButton} from '../components/AppButton';

const ReservationScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}
      enabled
      keyboardVerticalOffset={90}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginHorizontal: 16,
        }}>
        <Text style={{color: 'black', fontSize: 20, marginTop: '10%'}}>
          
        </Text>
        <View>
          <CustomTextInput onChange={undefined} />
          <AppButton text="Add Reservation" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ReservationScreen;
