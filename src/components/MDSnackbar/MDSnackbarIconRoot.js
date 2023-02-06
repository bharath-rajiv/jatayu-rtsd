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

// @mui material components
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";

export default styled(Icon)(({ theme, ownerState }) => {
  const { palette, functions, typography } = theme;
  const { color, bgWhite } = ownerState;

  const { white, transparent, gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size } = typography;

  // backgroundImage value
  let backgroundImageValue;

  if (bgWhite) {
    backgroundImageValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  } else if (color === "light") {
    backgroundImageValue = linearGradient(gradients.dark.main, gradients.dark.state);
  }

  return {
    backgroundImage: backgroundImageValue,
    WebkitTextFillColor: bgWhite || color === "light" ? transparent.main : white.main,
    WebkitBackgroundClip: "text",
    marginRight: pxToRem(8),
    fontSize: size.lg,
    transform: `translateY(${pxToRem(-2)})`,
  };
});
