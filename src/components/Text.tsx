import styled from 'styled-components/native';
import * as System from 'styled-system';

export interface TextProps
  extends System.TypographyProps,
    System.SpaceProps,
    System.ColorProps,
    System.SizeProps {}

export const composeBox = System.compose(
  System.typography,
  System.space,
  System.color,
  System.size,
);

export const Text = styled.Text<TextProps>(composeBox);

export default Text;
