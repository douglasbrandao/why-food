import styled from "styled-components";

export const Options = styled.div`
  margin: 10px 0 10px 0;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px;

  span {
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  padding: 0.6rem;
  background-color: #f00;
  border-radius: 0.4rem;
  border: 0;
  color: white;

  &:hover {
    background-color: #cc0000;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  color: #4b4b4b;
`;

export const Row = styled.div`
  display: flex;
  padding: 0 15px 0 15px;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 15px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CenterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
