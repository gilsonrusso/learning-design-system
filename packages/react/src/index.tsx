import { Button as MatButton, ThemeProvider, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { theme } from './styles';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import {colors} from '@gsr-ui/tokens'

// export type ButtonProps = {
//   type?: 'button' | 'submit' | 'reset' | undefined;
//   onClick?: Function;
//   disabled?: boolean;
//   success?: boolean;
//   primary?: boolean;
//   secondary?: boolean;
//   bordered?: boolean;
//   danger?: boolean;
//   neutral?: boolean;
//   tooltip?: string;
//   children?: React.ReactNode
// }

export const Button = styled(MatButton)({
  color: theme.palette.neutral?.[900],
  background: colors.green300,
})

export type ButtonProps = ComponentProps<typeof Button>

