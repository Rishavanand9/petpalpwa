import styled from 'styled-components';
import { fadeIn } from '@/theme/globalStyles';
// Styled components
const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
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

const LinkSpan = styled.span`
  color: #007bff;
  cursor: pointer;
  font-size: 12px;
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

// Add these to your styles.ts file
const ChipSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0;
    
    h4 {
        width: 100%;
        margin-bottom: 8px;
    }
`;

const ResidenceType = styled.div`
    margin: 16px 0;
    
    h4 {
        margin-bottom: 8px;
    }
    
    .radio-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;


// Styled components for the new UI elements
const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
`;

const ProfileCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
`;

const AddIcon = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: #007AFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
`;

const ChipsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    margin: 16px 0;

    h4 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
    }
`;

const ChipsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Chip = styled.div<{ selected: boolean }>`
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 14px;
    background-color: ${({ selected }) => (selected ? '#007AFF' : '#f0f0f0')};
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    border: 1px solid ${({ selected }) => (selected ? '#007AFF' : '#ccc')};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
`;


const ResidenceOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin: 16px 0;

    h4 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
    }
`;

const SliderContainer = styled.div`
    width: 100%;
    margin: 16px 0;

    .slider-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        font-size: 12px;
        color: #666;
    }
`;

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const RadioOption = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const AddPhoto = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
`;


export { AuthContainer, Form, ErrorText, LinkSpan, RadioGroup, RadioOption, 
  Chip, ChipsContainer, ChipsGrid,SliderContainer,ResidenceOptions,
  TermsContainer, ChipSection, ResidenceType, ProfileSection, ProfileCircle, AddIcon, AddPhoto };