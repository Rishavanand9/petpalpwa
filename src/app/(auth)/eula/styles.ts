
import { fadeIn } from '@/theme/globalStyles';
import styled from 'styled-components';

const EulaContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const Heading = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #777;
`;

export { EulaContainer, Heading, SubHeading, Paragraph, List, Footer };
