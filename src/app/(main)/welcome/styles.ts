import styled from "styled-components";
import Link from "next/link";
import { fadeIn } from "@/theme/globalStyles";

const WelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
  animation: ${fadeIn} 1s ease-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
  margin-top: 32px;
`;

const GuestLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 14px;
  margin-top: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LimitedText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
`;

const TitleText = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
`;

export { WelcomeContainer, ButtonContainer, GuestLink, LimitedText, TitleText };
