import React from "react";

import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import Theme from "assets/styles/Theme";
import "assets/styles/App.css";
import "react-toastify/dist/ReactToastify.min.css";
import AuthBox from "components/auth/AuthBox";

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthBox />
      <ToastContainer
        theme='light'
        position='bottom-right'
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        rtl={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
};

export default App;
