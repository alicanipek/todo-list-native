import styled from 'styled-components/native';
import * as System from 'styled-system';

export interface InputProps
  extends System.BorderProps,
    System.FlexboxProps,
    System.SpaceProps,
    System.ColorProps,
    System.SizeProps,
    System.BorderRadiusProps,
    System.PositionProps,
    System.TypographyProps,
    System.ShadowProps,
    System.LayoutProps {}

export const composeBox = System.compose(
  System.border,
  System.shadow,
  System.typography,
  System.flexbox,
  System.space,
  System.color,
  System.size,
  System.position,
  System.borderRadius,
);

const Input = styled.TextInput<InputProps>(composeBox);

export default Input;
