import styled, { createGlobalStyle } from "styled-components";

const fontFamily = `-apple-system, BlinkMacSystemFont, Ubuntu, "Helvetica Neue", Helvetica, sans-serif`;

const colorPrimary2 = "hsl(205, 87%, 29%)";
const colorPrimary3 = "hsl(205, 82%, 33%)";
const colorPrimary4 = "hsl(205, 76%, 39%)";
const colorPrimary6 = "hsl(205, 65%, 55%)";
const colorPrimary8 = "hsl(205, 84%, 74%)";
const colorPrimary10 = "hsl(205, 79%, 92%)";

const colorNeutral2 = "hsl(211, 39%, 23%)";
const colorNeutral3 = "hsl(209, 34%, 30%)";
const colorNeutral6 = "hsl(209, 23%, 60%)";
const colorNeutral8 = "hsl(210, 31%, 80%)";
const colorNeutral10 = "hsl(210, 36%, 96%)";

const colorSuccess3 = "hsl(83, 74%, 27%)";
const colorSuccess9 = "hsl(84, 77%, 86%)";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${fontFamily};
    font-size: 16px;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
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
  max-width: 480px;
  margin: -64px auto 96px auto;
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
  cursor: ${props => (props.onClick ? "pointer" : "default")};
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
  color: ${colorNeutral3};
  font-size: 16px;
  font-style: italic;
  line-height: 1.5em;
  white-space: pre-wrap;

  &:before {
    content: "Your answer: ";
    color: ${colorNeutral6};
  }
`;

export const TextField = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 112px;
  margin: 16px 0 0 0;
  padding: 8px;
  border: 3px solid ${colorNeutral8};
  border-radius: 6px;
  background: #fff;
  color: ${colorNeutral3};
  font-family: ${fontFamily};
  font-size: 16px;
  line-height: 1.4em;
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
    cursor: not-allowed;
  }

  &:focus {
    background: ${colorPrimary3};
  }
`;

export const SuccessMessage = styled.div`
  width: calc(100% - 64px);
  margin: 16px 0 0 0;
  padding: 16px 0;
  border-radius: 8px;
  background: ${colorSuccess9};
  color: ${colorSuccess3};
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`;
