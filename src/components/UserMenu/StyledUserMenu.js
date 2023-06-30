import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  background-color: #fff;
  color: blue;
  width: 130px;
  height: 30px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
