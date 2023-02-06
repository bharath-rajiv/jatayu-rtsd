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
import boxShadows from "assets/theme-dark/base/boxShadows";
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// RT System Diagonostics React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
