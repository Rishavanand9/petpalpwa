import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

interface CommonCardProps {
  title: string;
  description: string;
    status: string;
    timeInfo: string;
    button1Text: string;
    button2Text: string;
}

const Card = styled.div`
  display: flex;
  gap: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  background-color: white;
  margin-bottom: 10px;
`;

const PhotoContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const PhotoText = styled.div`
  color: #888;
  font-size: 12px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 12px;
  margin: 0 0 8px 0;
  font-weight: 500;
`;

const StatusBadge = styled.div`
  display: inline-block;
  background-color: #4CD964;
  color: #000;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
  margin-bottom: 8px;
`;

const Info = styled.div`
  font-size: 10px;
  color: #333;
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const Button1 = styled.button`
  background-color: white; 
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 12px;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const Button2 = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 12px;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const CommonCard: React.FC<CommonCardProps> = ({
  title,
  description,
  status,
  timeInfo,
  button1Text,
  button2Text
}) => {
  return (
    <Card>
      <PhotoContainer>
        <PhotoText>Photo</PhotoText>
      </PhotoContainer>
      
      <ContentContainer>
        <Title>{title}</Title>
        <StatusBadge>{status} · {timeInfo}</StatusBadge>
        <Info>
           {description}
        </Info>
      </ContentContainer>
      
      <RightContainer>
        <Button1>{button1Text}</Button1>
        <Button2>{button2Text}</Button2>
      </RightContainer>
    </Card>
  );
};

export default CommonCard;
