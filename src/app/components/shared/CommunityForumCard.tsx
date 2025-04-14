import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

// Types
export interface CommunityForumCardProps {
  title: string;
  type: 'event' | 'urgent' | 'general';
  details: {
    location?: string;
    date?: string;
    phone?: string;
    [key: string]: string | undefined;
  };
  engagement: {
    likes: number;
    comments: number;
  };
  username: string;
}

// Styled Components
const CardContainer = styled.div<{ cardtype: 'event' | 'urgent' | 'general' }>`
  width: 300px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background-color: white;
  border: 1px solid #e0e0e0;
  min-height: 280px;
  
  ${props => {
    switch (props.cardtype) {
      case 'event':
        return `border-color: #4CAF50;`;
      case 'urgent':
        return `border-color: #F44336;`;
      default:
        return `border-color: #2196F3;`;
    }
  }}
`;

const CardHeader = styled.div<{ cardtype: 'event' | 'urgent' | 'general' }>`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 14px;
`;

const Username = styled.div`
  font-size: 14px;
  color: #424242;
`;

const ContentArea = styled.div<{ cardtype: 'event' | 'urgent' | 'general' }>`
  padding: 16px;
  background-color: ${props => {
    switch (props.cardtype) {
      case 'event':
        return '#E8F5E9';
      case 'urgent':
        return '#FFEBEE';
      default:
        return 'white';
    }
  }};
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #212121;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #616161;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
  color: #757575;
`;

const EngagementFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-top: 1px solid #eeeeee;
`;

const EngagementItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #757575;
`;

const EngagementCount = styled.span`
  margin-left: 4px;
`;

// Component
const CommunityForumCard: React.FC<CommunityForumCardProps> = ({
  title,
  type,
  details,
  engagement,
  username
}) => {
  return (
    <CardContainer cardtype={type}>
      <CardHeader cardtype={type}>
        <UserAvatar>{username.charAt(0).toUpperCase()}</UserAvatar>
        <Username>{username}</Username>
      </CardHeader>
      
      <ContentArea cardtype={type}>
        <Title>{title}</Title>
        
        {details.location && (
          <DetailItem>
            <IconWrapper>
              <Icon icon={'mdi:location-outline'} width="18" />
            </IconWrapper>
            {details.location}
          </DetailItem>
        )}
        
        {details.date && (
          <DetailItem>
            <IconWrapper>
              <Icon icon={'mdi:calendar-outline'} width="18" />
            </IconWrapper>
            {details.date}
          </DetailItem>
        )}
        
        {details.phone && (
          <DetailItem>
            <IconWrapper>
              <Icon icon={'mdi:phone-outline'} width="18" />
            </IconWrapper>
            {details.phone}
          </DetailItem>
        )}
        
        {/* Render any additional custom details */}
        {Object.entries(details).map(([key, value]) => {
          if (!['location', 'date', 'phone'].includes(key) && value) {
            return (
              <DetailItem key={key}>
                <IconWrapper>
                  {/* Default icon for custom details */}
                  <Icon icon={'mdi:megaphone-outline'} width="18" />
                </IconWrapper>
                {value}
              </DetailItem>
            );
          }
          return null;
        })}
      </ContentArea>
      
      <EngagementFooter>
        <EngagementItem>
          <Icon icon={'mdi:heart-outline'} width="18" />
          <EngagementCount>{engagement.likes}</EngagementCount>
        </EngagementItem>
        
        <EngagementItem>
          <Icon icon={'mdi:comment-outline'} width="18" />
          <EngagementCount>{engagement.comments}</EngagementCount>
        </EngagementItem>
        
        <EngagementItem>
          <Icon icon={'mdi:share-outline'} width="18" />
        </EngagementItem>
      </EngagementFooter>
    </CardContainer>
  );
};

export default CommunityForumCard;