import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  background-color: #fff;
  color: blue;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
