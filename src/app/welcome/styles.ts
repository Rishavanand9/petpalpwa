import styled from "styled-components";
import Link from "next/link";
import { fadeIn } from "@/theme/globalStyles";

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

export { ButtonContainer, GuestLink, LimitedText, TitleText };
