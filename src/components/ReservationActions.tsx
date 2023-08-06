import {View, Text} from 'react-native';
import React from 'react';
import {AppButton} from './AppButton';
import {removeReservation} from '../app/features/ReservationSlice';
import {useDispatch} from 'react-redux';

interface ReservationActionsProps {
  item: any;
  index: any;
}
const ReservationActions = (props: ReservationActionsProps) => {
  const dispatch = useDispatch();
  const DeleteReservation = () => {
    dispatch(removeReservation(props?.index));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 4,
        width: '100%',
      }}>
      <Text style={{fontSize: 12, color: 'black', fontWeight: '600'}}>
        {props?.index + 1}:{'     '}
        <Text style={{fontSize: 16}}>{props?.item}</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <AppButton
          buttonProps={{
            style: {marginRight: 10, paddingHorizontal: 10},
          }}
          text={'Add Item'}
        />
        <AppButton
          buttonProps={{
            style: {paddingHorizontal: 10},
            onPress: DeleteReservation,
          }}
          text={'Delete'}
        />
      </View>
    </View>
  );
};

export default ReservationActions;
