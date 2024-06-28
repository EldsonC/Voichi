import React from "react";

export interface IconProps {
  size: number;
  color: string;
}

export interface ButtonProps {
  type: string;
  text: string;
  icon: React.ReactNode;

  width: number;
  height: number;

  bgColor: string;
  borderRadius: number;
}