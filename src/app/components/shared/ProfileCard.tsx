import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export interface ProfileCardProps {
  name: string;
  distance?: string;
  rating: number;
  description?: string;
  imageUrl?: string;
  verified?: boolean;
  onViewProfile?: () => void;
}

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: none;
  overflow: hidden;
  width: 100%;
  max-width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ProfileImage = styled.div<{ imageUrl?: string }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  ${props => props.imageUrl 
    ? `background-image: url(${props.imageUrl});
       background-size: cover;
       background-position: center;`
    : ''}
`;

const ProfileImageText = styled.span`
  font-size: 12px;
  color: #777;
`;

const CardContent = styled.div`
  padding: 12px 16px;
`;

const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Distance = styled.span`
  font-size: 10px;
  color: #777;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const VerifiedIcon = styled.span`
  display: inline-block;
  color: #4caf50;
  margin-left: 4px;
  font-size: 14px;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StarRating = styled.div`
  display: flex;
  color:rgb(216, 204, 39);
  margin-right: 4px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 10px;
  color: #666;
  line-height: 1.4;
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 6px 0;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  distance,
  rating,
  description,
  imageUrl,
  verified = false,
  onViewProfile
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <ProfileImage imageUrl={imageUrl}>
          {!imageUrl && <ProfileImageText>Photo</ProfileImageText>}
        </ProfileImage>
      </CardHeader>
      
      <CardContent>
        <NameRow>
          <Name>
            {name} 
            {verified && <VerifiedIcon>✓</VerifiedIcon>}
          </Name>
          {distance && <Distance><Icon icon="mdi:map-marker" color={'#73DF77'} />{distance} km</Distance>}
        </NameRow>
        
        <RatingRow>
          <StarRating>
            {Array(5).fill(0).map((_, i) => (
              <span key={i}>
                {i < Math.floor(rating) ? '★' : '☆'}
              </span>
            ))}
          </StarRating>
        </RatingRow>
        
        {description && <Description>{description}</Description>}
        
        <ActionButton onClick={onViewProfile}>
          View Profile
        </ActionButton>
      </CardContent>
    </CardContainer>
  );
};

export default ProfileCard;
