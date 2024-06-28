import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    border: none;
    outline: none;
    text-decoration: none;
  }

  :root {
    --primary-color: #222222;
    --secundary-color: #D9D9D9;
    --destaque-color: #FC099B;
    --black-500: #2E2E2E;
    --subtitle-color: #525252;
  }

  body {
    overflow: hidden;
    background-color: var(--primary-color);
    font-family: "Inter", sans-serif;
  }
`;