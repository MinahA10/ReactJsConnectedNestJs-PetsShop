// Augment the palette to include an ochre color
import { useAuth } from "../services/useAuth";
import SignUpForm from "../components/SignUpForm";
import LoginImage from "../assets/login_image.png";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    fadeBlack: Palette["primary"];
  }

  interface PaletteOptions {
    fadeBlack?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    fadeBlack: true;
  }
}

type SignUpFormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpContainer() {
  const { register } = useAuth();

  const handleSubmit = (data: SignUpFormInputs) => {
    register(data.name, data.email, data.password);
  };

  return <SignUpForm onSubmit={handleSubmit} loginImage={LoginImage} />;
}
