import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { UserProvider } from "./services/useAuth";
import React from "react";
import SignInForm from "./container/SignInContainer";
import SignUpForm from "./container/SignUpContainer";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
