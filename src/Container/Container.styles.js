import styled from "styled-components";

export const StyledContainerComponent = styled.div`
width: 50%;
margin: auto;
margin-top: 100px;
.heading {
    font-weight: 500;
    height: 100%;
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 40px;
}

.info-text {
    font-size: 23px;
    font-weight: 500;
}

.logos {
    display: flex;
    align-items: center;
    gap: 50px;

    .company-logo {
        display: flex;
        align-items: center;
        vertical-align: center;
        font-size: 25px;
    }
}

.courses-button {
    text-align: center;
    margin-top: 30px;

  button {
font-size: 18px;
    width: 100%;
    height: 40px;
    background-color: orange;
    border: none;
  }
}


`