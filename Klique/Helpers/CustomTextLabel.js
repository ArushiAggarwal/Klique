import React from 'react';
import { Text } from 'react-native';

const CustomTextLabel = ({ style, ...props }) => {
  return <Text style={[{ fontFamily: 'Montserrat-Bold' }, style]} {...props} />;
};

export default CustomTextLabel;