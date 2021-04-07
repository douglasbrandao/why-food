import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 0;

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
