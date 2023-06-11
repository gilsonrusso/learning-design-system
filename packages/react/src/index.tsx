import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";
import { theme } from './styles';


const MatButton = styled(Button)(({theme}) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary['300'],
}))


export const  MyButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <MatButton>Click Me</MatButton>
    </ThemeProvider>
  );
}
