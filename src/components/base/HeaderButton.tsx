import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Button, {ButtonProps} from '../styled/Button';
import Text from '../styled/Text';

interface HeaderButtonProps extends ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
}

export default function HeaderButton({
  onPress,
  text,
  ...other
}: HeaderButtonProps) {
  return (
    <Button onPress={onPress} {...other}>
      <Text color="#006CFF" fontSize={18}>
        {text}
      </Text>
    </Button>
  );
}
