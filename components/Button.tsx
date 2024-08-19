import React, { FC } from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPressHandler: () => void;
  style?: ViewStyle;
}

const Button: FC<ButtonProps> = ({ title, onPressHandler, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPressHandler}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
