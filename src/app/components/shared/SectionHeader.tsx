'use client';

import styled from 'styled-components';

interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
  showViewAll?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 0 4px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const ViewAllLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewAllHref = '#', showViewAll = true }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {showViewAll && <ViewAllLink href={viewAllHref}>View All</ViewAllLink>}
    </Container>
  );
};

export default SectionHeader;
