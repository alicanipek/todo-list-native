import {TouchableOpacity, ViewPropTypes} from 'react-native';
import styled from 'styled-components/native';
import * as System from 'styled-system';

export interface ButtonProps
  extends System.BorderProps,
    System.FlexboxProps,
    System.SpaceProps,
    System.ColorProps,
    System.SizeProps,
    System.BorderRadiusProps,
    System.LayoutProps {}

export const composeBox = System.compose(
  System.border,
  System.flexbox,
  System.space,
  System.color,
  System.size,
  System.borderRadius,
);

const Button = styled.TouchableOpacity<ButtonProps>(composeBox);

export default Button;
