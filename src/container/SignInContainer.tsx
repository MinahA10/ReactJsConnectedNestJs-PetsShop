import React from "react";
import { useAuth } from "../services/useAuth";
import LoginImage from "../assets/login_image.png";
import SignInForm from "../components/SignInForm";

// Augment the palette to include a fadeBlack color
declare module "@mui/material/styles" {
  interface Palette {
    fadeBlack: Palette["primary"];
  }

  interface PaletteOptions {
    fadeBlack?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a fadeBlack option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    fadeBlack: true;
  }
}

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function SignInContainer() {
  const { loginUser } = useAuth();
  const handleLogin = (data: LoginFormInputs) => {
    loginUser(data.email, data.password);
  };

  return <SignInForm onSubmit={handleLogin} loginImage={LoginImage} />;
}
