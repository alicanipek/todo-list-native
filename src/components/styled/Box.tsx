import styled from 'styled-components/native';
import * as System from 'styled-system';

export interface BoxProps
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
  System.layout,
  System.borderRadius,
);

export const Box = styled.View<BoxProps>(composeBox);

export default Box;
