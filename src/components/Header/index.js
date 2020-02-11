import React from "react";
import { StyledHeader, Text } from "./styles";
import { FaHotdog } from "react-icons/fa";

function Header() {
  return (
    <StyledHeader>
      <Text>
        Why Food? <FaHotdog />
      </Text>
    </StyledHeader>
  );
}

export default Header;
