import { TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeartComponent = ({ isFavorite, onPress }) => {
    return (
      <TouchableOpacity style={{ alignSelf: 'flex-end', top: 10, right: 10 }} onPress={onPress}>
        <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={20} color={isFavorite ? 'red' : '#000'} />
      </TouchableOpacity>
    );
  };

export default HeartComponent;
