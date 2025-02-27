import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MinervaProps, systemProps, Flex } from '../layout';
import Icon from '../Icon';
// import Button from '../Button';
import Text from '../Text';

export const StyledAlert = styled(Flex)(
  {
    padding: '16px',
    borderRadius: '5px',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  systemProps
);

export const StyledAlertTitle = styled(Text)(
  {
    fontWeight: 'bold',
    marginRight: '5px',
  },
  systemProps
);

export const StyledAlertDescription = styled(Text)``;

export const StyledCloseText = styled(Text)`
  text-decoration: underline;
`;

export const StyledAlertInner = styled(Flex)``;

export const StyledAlertIconSection = styled(Flex)`
  justify-content: flex-start;
`;

export interface AlertProps extends MinervaProps {
  children?: React.ReactNode;
  status?: 'error' | 'success' | 'warning' | 'info';
  title?: string;
  bg?: string;
  icon?: string;
  // isOpen?: boolean;
  // onClose?: any;
  // canBeClosed?: boolean;
  // hasCloseIcon?: boolean;
  // closeText?: string;
  props?: any;
}

// @TODO: Move these to the theme so they can be customized
const alertTypes = {
  error: {
    statusColor: '#f8b4b4',
    statusIcon: 'alert-circle',
  },
  success: {
    statusColor: '#bcf0da',
    statusIcon: 'check-circle',
  },
  warning: {
    statusColor: '#fdf6b2',
    statusIcon: 'alert-triangle',
  },
  info: {
    statusColor: '#c3ddfd',
    statusIcon: 'info',
  },
};

export const Alert = forwardRef(function Alert(
  { title, children, status, icon, ...props }: AlertProps,
  ref
) {
  const { statusColor, statusIcon } =
    // if status is provided and is a provided alertType, return it
    status && Object.keys(alertTypes).includes(status)
      ? alertTypes[status]
      : {
          statusColor: '#e5e7eb',
          statusIcon: null,
        };

  const alertIcon = icon || statusIcon;

  return (
    <StyledAlert
      ref={ref}
      role="alert"
      bg={statusColor}
      lineHeight={1}
      aria-label={`${title}`}
      aria-live="polite"
      fontFamily="body"
      {...props}
    >
      {alertIcon && <Icon name={alertIcon} size="20px" mr={2} />}
      <StyledAlertTitle>{title}</StyledAlertTitle>
      {children}
    </StyledAlert>
  );
});

export default Alert;
