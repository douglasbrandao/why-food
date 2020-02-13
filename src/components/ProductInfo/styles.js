import styled from "styled-components";
import { Button } from "reactstrap";

export const Options = styled.div`
  margin: 10px 0 5px 0;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
  padding: 10px;

  span {
    font-weight: bold;
    font-size: 12px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #f00;
  border: 0;

  &:hover {
    background-color: #cc0000;
  }
`;

export const LabelPrice = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  color: #4b4b4b;
`;

export const RowInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
