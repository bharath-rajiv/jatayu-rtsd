/**
=========================================================
* RT System Diagonostics React - v2.1.0
=========================================================

* Product Page: https://www.youtube.com/watch?v=p7YXXieghto/product/material-dashboard-react
* Copyright 2022 Bharath Rajiv A (https://www.youtube.com/watch?v=p7YXXieghto)

Coded by www.youtube.com/watch?v=p7YXXieghto

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// RT System Diagonostics React Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
