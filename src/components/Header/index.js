import React from "react";
import { FaHotdog } from "react-icons/fa";
import { HeaderBackground, Text } from "./styles";

function Header() {
  return (
    <HeaderBackground>
      <Text>
        Why Food? <FaHotdog />
      </Text>
    </HeaderBackground>
  );
}

export default Header;
