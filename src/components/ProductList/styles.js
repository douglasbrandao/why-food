import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Card = styled.a`
  width: 250px;
  padding: 10px;
  margin-right: 4px;
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  &:hover {
    text-decoration: none;
  }

  h2 {
    color: #4e4e4e;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;

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
