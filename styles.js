import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --max-width: 1000px;
  --main-padding-full: 1.5em;
  --main-padding-sides: 0 1.5em;
  --primary-color: #393d3f;
  --secondary-color: #00916e;
  --primary-background-color: #f8f7f4;
  --secondary-background-color: #d0f8b9;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  background-color: var(--primary-background-color);
}
`;
