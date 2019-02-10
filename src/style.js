import styled, { createGlobalStyle } from "styled-components";

const fontFamily = `-apple-system, BlinkMacSystemFont, Ubuntu, "Helvetica Neue", Helvetica, sans-serif`;

// const colorPrimary1 = "hsl(205, 100%, 21%)";
const colorPrimary2 = "hsl(205, 87%, 29%)";
const colorPrimary3 = "hsl(205, 82%, 33%)";
const colorPrimary4 = "hsl(205, 76%, 39%)";
// const colorPrimary5 = "hsl(205, 67%, 45%)";
const colorPrimary6 = "hsl(205, 65%, 55%)";
// const colorPrimary7 = "hsl(205, 74%, 65%)";
const colorPrimary8 = "hsl(205, 84%, 74%)";
// const colorPrimary9 = "hsl(205, 97%, 85%)";
const colorPrimary10 = "hsl(205, 79%, 92%)";

// const colorNeutral1 = "hsl(209, 61%, 16%)";
const colorNeutral2 = "hsl(211, 39%, 23%)";
const colorNeutral3 = "hsl(209, 34%, 30%)";
// const colorNeutral4 = "hsl(209, 28%, 39%)";
// const colorNeutral5 = "hsl(210, 22%, 49%)";
const colorNeutral6 = "hsl(209, 23%, 60%)";
// const colorNeutral7 = "hsl(211, 27%, 70%)";
const colorNeutral8 = "hsl(210, 31%, 80%)";
// const colorNeutral9 = "hsl(212, 33%, 89%)";
const colorNeutral10 = "hsl(210, 36%, 96%)";

// const colorSuccess1 = "hsl(81, 86%, 14%)";
// const colorSuccess2 = "hsl(81, 78%, 21%)";
const colorSuccess3 = "hsl(83, 74%, 27%)";
// const colorSuccess4 = "hsl(83, 70%, 34%)";
// const colorSuccess5 = "hsl(83, 64%, 42%)";
// const colorSuccess6 = "hsl(83, 55%, 52%)";
// const colorSuccess7 = "hsl(83, 63%, 61%)";
// const colorSuccess8 = "hsl(83, 68%, 74%)";
const colorSuccess9 = "hsl(84, 77%, 86%)";
// const colorSuccess10 = "hsl(83, 88%, 94%)";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${fontFamily};
    font-size: 16px;
    font-smooth:always;
    -webkit-font-smoothing:antialiased;
    background: ${colorNeutral10};
    color: ${colorNeutral3};
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 112px 0;
  background: ${colorPrimary2};
  color: ${colorNeutral8};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${colorNeutral10};
  font-size: 40px;
  font-weight: 800;
  line-height: 1.25em;

  a {
    color: ${colorNeutral10};
    text-decoration: none;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: ${colorPrimary8};
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5em;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  margin: -64px auto 32px auto;
  padding: 24px 0;
  border-radius: 8px;
  background: #fff;
  color: ${colorNeutral3};
  box-shadow: 0 15px 35px hsla(209, 61%, 16%, 0.15);
`;

export const QuestionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0;
  width: 100%;
  box-sizing: border-box;
`;

export const QuestionContainer = styled.div`
  padding: ${props => (props.active ? "24px 32px" : "16px 32px 0 32px")};
  background: ${props => (props.active ? colorPrimary10 : "transparent")};
  color: ${props => (props.active ? colorNeutral2 : colorNeutral3)};
  opacity: ${props => (props.future ? 0.5 : 1)};
`;

export const QuestionTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25em;
`;

export const QuestionAnswer = styled.p`
  margin: 16px 0;
  padding: 0;
  font-size: 16px;
  color: ${colorNeutral2};

  &:before {
    content: "Your answer: ";
    color: ${colorNeutral6};
  }
`;

export const TextField = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  margin: 16px 0 0 0;
  padding: 8px;
  border: 3px solid ${colorNeutral8};
  border-radius: 6px;
  background: #fff;
  color: ${colorNeutral3};
  font-family: ${fontFamily};
  font-size: 16px;
  resize: none;
  outline: none;
  transition: border 0.4s;

  &:focus {
    border-color: ${colorPrimary6};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 3px 0 3px;
`;

export const Button = styled.button`
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  background: ${colorPrimary4};
  color: #fff;
  font-family: ${fontFamily};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: background 0.4s, color 0.4s;

  &:disabled {
    color: ${colorPrimary8};
  }

  &:focus {
    background: ${colorPrimary3};
  }
`;

export const SuccessMessage = styled.div`
  width: calc(100% - 64px);
  margin: 16px 0 0 0;
  padding: 12px 0;
  border-radius: 8px;
  background: ${colorSuccess9};
  color: ${colorSuccess3};
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
