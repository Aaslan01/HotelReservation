import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput} from '../components/InputField';
import {AppButton} from '../components/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store';
import {addReservation} from '../app/features/ReservationSlice';
import ReservationActions from '../components/ReservationActions';

const ReservationScreen = () => {
  const dispatch = useDispatch();
  const [newReservation, setNewReservation] = useState<string>('');
  const reservations = useSelector(
    (state: RootState) => state.reservation.value,
  );
  // console.log('reservations', reservations);

  const AddReservation = () => {
    console.log('reservations', reservations, newReservation);
    if (!newReservation) return;
    dispatch(addReservation(newReservation));
  };

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
        <View>
          <Text style={{color: 'black', fontSize: 20, marginTop: '10%'}}>
            Under Reservation
          </Text>
          {reservations.map((item, index) => (
            <ReservationActions item={item} index={index} />
          ))}
        </View>
        <View>
          <CustomTextInput onChange={setNewReservation} />
          <AppButton
            buttonProps={{
              style: {marginTop:10},
              onPress: AddReservation,
            }}
            text="Add Reservation"
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ReservationScreen;
