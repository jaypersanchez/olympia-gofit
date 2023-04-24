import React, { useEffect } from "react";
import { Text } from "react-native";
import useFontStyles from "../hooks/useFontStyles";

const TextItem = ({ type, font, style, children }) => {
  const [typeStyle, fontStyle, handleTypeStyle, handleFontStyle] =
    useFontStyles();

  useEffect(() => {
    handleTypeStyle(type);
    handleFontStyle(font);
  }, [type, font]);

  return (
    <Text style={{ ...style, ...typeStyle, ...fontStyle }}>{children}</Text>
  );
};

export default TextItem;
