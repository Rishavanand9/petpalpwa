import { styled } from "styled-components";
import { Icon } from '@iconify/react';

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  color: #4b5563;
  padding: 2rem 1rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: left;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;

  @media (min-width: 768px) {
    align-items: flex-start;
    font-size: 0.9rem;
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  a {
    color: #4b5563;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    max-width: 300px;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #4b5563;
    font-size: 1.4rem;

    &:hover {
      color: #111827;
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fef9c3;
  color: #374151;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NotificationWrapper = styled.div`
  position: relative;
  svg {
    font-size: 24px;
    color: #dc2626;
  }
`;

const NotificationCount = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 9999px;
`;

const ProfileIcon = styled(Icon)`
  font-size: 32px;
  color: #60a5fa;
`;

export { FooterContainer, FooterGrid, FooterCol, FooterBottom, SocialIcons, HeaderContainer, LocationWrapper, IconWrapper, NotificationWrapper, NotificationCount, ProfileIcon };
