import styled from "styled-components";

export const Header = styled.header`
  padding-top: 37px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;

  .content_header {
    width: 80rem;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container_buttons {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`