"use client";
import { createGlobalStyle, keyframes, styled } from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  @media (prefers-color-scheme: light) {
    body {
      background: #FFFFFF;
      color:rgb(0, 0, 0);
    }
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px); /* optional subtle motion */
  }
  to {
    opacity: 1.5;
    transform: translateY(0);
  }
`;

export const MainLayoutContainer = styled.div`
  margin: 8px;
  animation: ${fadeIn} 1s ease-in-out;
  max-width: 100vw;
`;
