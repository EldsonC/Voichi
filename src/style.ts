import styled from "styled-components";

export const Voice = styled.main `
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .void_voices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h1 {
      font-size: 40px;
      font-weight: 600;
      color: var(--secundary-color);

      span {
        color: var(--destaque-color);
      }
    }

    p {
      font-size: 16px;
      font-weight: 600;
      color: var(--subtitle-color);

      text-align: center;
    }
  }
`;