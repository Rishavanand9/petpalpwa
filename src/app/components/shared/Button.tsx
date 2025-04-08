import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: number;
  onClick?: Function;
  width?: string;
  mT?: number;
}

const Button = styled.button<ButtonProps>`
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => `${props.size}px`};
  font-weight: 500;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;
  width: ${(props) => props.width || "100%"};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  margin-top: ${(props) => props.mT ? `${props.mT}rem` : "0"};

  ${(props) =>
    props.variant === "primary"
      ? css`
          background-color: ${props.theme.colors.primary};
          color: #ffffff;
          border: none;

          &:hover {
            background-color: ${props.theme.colors.primaryHover};
          }
        `
      : css`
          background-color: #ffffff;
          color: ${props.theme.colors.primary};
          border: 1px solid ${props.theme.colors.primary};

          &:hover {
            background-color: ${props.theme.colors.secondaryHover};
          }
        `}
`;

export default Button;
