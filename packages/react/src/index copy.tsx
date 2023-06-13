import { Button as MatButton, ThemeProvider, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { theme } from './styles';
import styled from '@emotion/styled';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: Function;
  disabled?: boolean;
  success?: boolean;
  primary?: boolean;
  secondary?: boolean;
  bordered?: boolean;
  danger?: boolean;
  neutral?: boolean;
  tooltip?: string;
  children?: React.ReactNode
}

export const Button = ({
  type, 
  onClick, 
  disabled, 
  success,
  primary, 
  secondary, 
  bordered, 
  danger, 
  neutral,
  tooltip, 
  children
}:ButtonProps) => {

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={tooltip ? tooltip : ''}>
        <MatButton
          type={type}
          disabled={disabled}
          onClick={() => (onClick ? onClick() : null)}
          className={classNames({
            button: true,
            primary: primary,
            secondary: secondary,
            disabled: disabled,
            bordered: bordered,
            success: success,
            danger: danger,
            neutral: neutral
          })}
        >
          {children}
        </MatButton>
    </Tooltip>
    </ThemeProvider>
  )
}

