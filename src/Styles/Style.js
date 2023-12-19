import styled from "styled-components";
import { LightTheme, Navy500, White } from "./Colors";

export const commonRadius = "15px";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  font-family: "Mulish", sans-serif;
  padding: 1rem;
  position: relative;
  overflow-y: auto;
  background:${LightTheme};
  color:${Navy500};
`;


export const InnerWrapper = styled.div`
  margin: auto;
  width: 80%;
  background:${White};
  border-radius:${commonRadius};
`;

