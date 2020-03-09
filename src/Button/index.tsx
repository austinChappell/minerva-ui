import React from 'react';
import styled from 'styled-components';
// import { MinervaProps } from 'layout';
import Spinner from '../Spinner';
// import { MinervaProps } from '../layout';
import { MinervaProps } from '../layout';
import PseudoBox from '../PseudoBox';

export const buttonThemeProps = {
  backgroundColor: '#fff',
  borderWidth: '1px',
  color: '#374151',
  fontWeight: '500',
  display: 'inline-flex',
  WebkitAppearance: 'none',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  fontSize: '14px',
  lineHeight: '20px',
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '16px',
  paddingRight: '16px',
  borderRadius: '5px',
};

const StyledButton = styled(PseudoBox)(props => ({
  // backgroundColor: '#525252',
  // ...buttonThemeProps,
  transition: 'all 150ms ease 0s',
  outline: 'none',
  ':hover': {
    backgroundColor: '#f9fafb',
  },
  ':focus': {
    borderColor: '#a4cafe',
    boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
    outline: 0,
  },
  ':disabled': {
    opacity: 0.4,
    // color: '#8F8F8F',
    cursor: 'not-allowed',
  },
  ...props.theme.Button,
  // backgroundColor: props.theme.colors.primary || 'rgb(56, 161, 105)',
  // ...props.theme.Button.container,
  // ...props.theme.Button.text,
}));

export interface ButtonProps extends MinervaProps {
  children?: React.ReactNode;
  /** Toggles disabled pseudo class */
  disabled?: boolean;
  /** If `true`, button will show a spinner. */
  isLoading?: boolean;
  /** One of several defined button styles (primary by default) */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

// export type ButtonProps = CustomButtonProps & MinervaProps;

export default function Button({
  children,
  disabled = false,
  as: Comp = 'button',
  isLoading = false,
  variant,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      as={Comp}
      disabled={disabled || isLoading}
      role="button"
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
}
