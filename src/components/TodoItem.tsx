import React from 'react';
import {GestureResponderEvent} from 'react-native';
import Item from '../models/Item';
import TodoDone from './icons/TodoDone';
import TodoNotDone from './icons/TodoNotDone';
import Box from './styled/Box';
import Button from './styled/Button';
import Text from './styled/Text';

interface TodoItemProps {
  onPress: (event: GestureResponderEvent) => void;
  item: Item;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <Box flexDirection="row" alignItems="center">
      <Button paddingX={18} onPress={props.onPress}>
        {props.item.isDone ? (
          <TodoDone></TodoDone>
        ) : (
          <TodoNotDone></TodoNotDone>
        )}
      </Button>
      <Box
        flex={1}
        height={60}
        width="auto"
        paddingY={18}
        borderBottomWidth={1}
        borderBottomColor="#252A311A">
        <Text fontSize={18} color={'black'}>
          {props.item.title}
        </Text>
      </Box>
    </Box>
  );
}
