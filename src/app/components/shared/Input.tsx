import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary };
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary };
    box-shadow: 0 0 0 2px rgba(187, 188, 240, 0.49);
  }
`;

const Input: React.FC<InputProps> = ({ label, id, placeholder, ...props }) => {
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase();

  return (
    <InputWrapper>
      <Label htmlFor={inputId}>{label}</Label>
      <StyledInput id={inputId} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default Input;
