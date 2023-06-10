import { ThemeProvider, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "./styles";

const StyledBox = styled(Box)(() => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"primary"}></Box>
      <Button color={"neutral"}></Button>
      <StyledBox></StyledBox>
    </ThemeProvider>
  );
}
