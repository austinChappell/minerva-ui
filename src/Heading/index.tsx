import React from 'react';
import styled from 'styled-components';
import { systemProps } from '../layout';

const sizes = {
  xl: '40px',
  lg: '32px',
  md: '24px',
  sm: '16px',
  xs: '8px',
};

const StyledHeading = styled('h1')<any>(
  props => ({
    ...props.theme.Heading,
    fontSize: sizes[props.size],
    lineHeight: props.lineHeight,
  }),
  systemProps
);

export interface HeadingProps {
  children?: React.ReactNode;
  size?: string;
  lineHeight?: string;
  props?: any;
}

export const Heading = function Heading(
  { children, ...props }: HeadingProps,
  ref
) {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  size: 'xl',
  lineHeight: 'normal',
};

export default Heading;
