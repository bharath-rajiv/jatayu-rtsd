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
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// RT System Diagonostics React helper functions
// import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

const { white, gradients, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const switchButton = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-checked": {
        color: gradients.dark.main,

        "&:hover": {
          backgroundColor: transparent.main,
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};

export default switchButton;
