import styled from 'styled-components';
import { fadeIn } from '@/theme/globalStyles';
// Styled components
const VerifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  gap: 1.5rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;


export { VerifyContainer, Form, ErrorText };