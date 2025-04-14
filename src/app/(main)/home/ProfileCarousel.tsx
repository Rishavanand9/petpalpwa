import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import ProfileCard, { ProfileCardProps } from '@/app/components/shared/ProfileCard';

interface ProfileCarouselProps {
  profiles: ProfileCardProps[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 8px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 8px 0;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CardWrapper = styled.div`
  flex: 0 0 auto; /* This prevents shrinking */
  /* You can define a specific width here if needed */
  /* width: 280px; */
`;


const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ profiles }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check scroll possibilities after component mounts and when profiles change
    checkScrollability();
  }, [profiles]);

  const checkScrollability = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setCanScrollLeft(scrollPosition > 0);
      setCanScrollRight(scrollPosition < container.scrollWidth - container.clientWidth);
    }
  };


  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
      checkScrollability();
    }
  };

  return (
    <CarouselContainer>
      
      <CardsContainer 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {profiles.map((profile, index) => (
          <CardWrapper key={index} data-card-wrapper>
            <ProfileCard
              name={profile.name}
              rating={profile.rating}
              description={profile.description}
              distance={profile.distance}
              imageUrl={profile.imageUrl}
              verified={profile.verified}
            />
          </CardWrapper>
        ))}
      </CardsContainer>
      
    </CarouselContainer>
  );
};

export default ProfileCarousel;