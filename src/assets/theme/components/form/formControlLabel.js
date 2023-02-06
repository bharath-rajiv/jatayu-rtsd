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

// RT System Diagonostics React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// RT System Diagonostics React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;
const { size, fontWeightBold } = typography;

const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};

export default formControlLabel;
