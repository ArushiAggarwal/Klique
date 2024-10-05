import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ style, ...props }) => {
  return <Text style={[{ fontFamily: 'DelaGothicOne-Regular' }, style]} {...props} />;
};

export default CustomText;