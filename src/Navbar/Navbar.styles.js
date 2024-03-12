import styled from "styled-components";

export const StyledNavbarComponent = styled.div`
  position: sticky;
  top: 0;

  .navbar {
    background-color: #0a0a23;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-left {
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 2px;
      width: 70%;

      .searchbar {
        display: flex;
        background-color: #3b3b4f;
        align-items: center;
        width: 60%;

        .fa-solid {
          color: #fff;
          padding: 5px;
          /* height: 28px; */
        }

        .nav-searchbar-input {
          border: none;
          width: 100%;
          background-color: #3b3b4f;
          height: 28px;
          padding: 0;

          :focus-visible {
            outline: none;
          }

          ::placeholder {
            color: #ffffff;
            opacity: 1;
          }
        }
      }

      .nav-name {
        margin: 5px;
        font-size: 22px;
        padding-left: 20px;
        color: #fff;
      }
    }

    .nav-right-menu {
      display: flex;
      justify-self: flex-end;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      .globe-icon {
        border: 1px solid;
        padding: 2px;
        border: 1px solid #fff;

        .fa-globe {
          color: #fff;
        }
      }

      .menu {
        border: 1px solid;
        padding: 2px;
        color: #fff;
      }

      .sign-in {
        text-decoration: none;
        color: #fff;
        border: 1px solid;
        padding: 2px;
        margin-right: 10px;
      }

      .sign-out {
        text-decoration: none;
        color: #fff;
        border: 1px solid;
        padding: 2px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
`;
