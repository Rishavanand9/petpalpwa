import { fadeIn } from '@/theme/globalStyles';
import styled from 'styled-components';

const RegisterContainer = styled.div`
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const LinkSpan = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export { RegisterContainer, Form, RadioGroup, RadioOption, TermsContainer, LinkSpan };
